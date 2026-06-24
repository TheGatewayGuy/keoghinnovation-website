export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
}

// Channel ID for @TheGatewayGuy — set via env var for flexibility
// To find your channel ID: YouTube Studio → Settings → Channel → Advanced settings
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID ?? "UCplaceholder";
const API_KEY = process.env.YOUTUBE_API_KEY;

export async function getYouTubeVideos(count = 3): Promise<YouTubeVideo[]> {
  // If no API key, fall back to RSS (no key required, limited to latest 15)
  if (!API_KEY) {
    return getVideosFromRSS(count);
  }

  try {
    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("channelId", CHANNEL_ID);
    url.searchParams.set("order", "date");
    url.searchParams.set("type", "video");
    url.searchParams.set("maxResults", String(count));
    url.searchParams.set("key", API_KEY);

    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`YouTube API error: ${res.status}`);

    const data = await res.json();
    return (data.items ?? []).map((item: {
      id: { videoId: string };
      snippet: { title: string; description: string; publishedAt: string; thumbnails: { high: { url: string } } };
    }) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnail: item.snippet.thumbnails.high.url,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    }));
  } catch (err) {
    console.error("Failed to fetch YouTube videos via API:", err);
    return getVideosFromRSS(count);
  }
}

async function getVideosFromRSS(count: number): Promise<YouTubeVideo[]> {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
    const res = await fetch(rssUrl, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const xml = await res.text();
    const entries = xml.match(/<entry>([\s\S]*?)<\/entry>/g) ?? [];

    return entries.slice(0, count).map((entry) => {
      const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? "";
      const title = entry.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
      const published = entry.match(/<published>(.*?)<\/published>/)?.[1] ?? "";
      return {
        id: videoId,
        title: decodeXML(title),
        description: "",
        publishedAt: published,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      };
    });
  } catch {
    return [];
  }
}

function decodeXML(str: string) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
