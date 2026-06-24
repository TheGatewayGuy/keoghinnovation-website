export interface YouTubeVideo {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
}

function decodeXML(str: string) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export async function getYouTubeVideos(count = 6): Promise<YouTubeVideo[]> {
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!channelId) {
    console.warn("YOUTUBE_CHANNEL_ID not set — skipping YouTube fetch.");
    return [];
  }

  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const res = await fetch(rssUrl, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`YouTube RSS error: ${res.status}`);

    const xml = await res.text();
    const entries = xml.match(/<entry>([\s\S]*?)<\/entry>/g) ?? [];

    return entries.slice(0, count).map((entry) => {
      const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? "";
      const title = decodeXML(entry.match(/<title>(.*?)<\/title>/)?.[1] ?? "");
      const published = entry.match(/<published>(.*?)<\/published>/)?.[1] ?? "";

      return {
        id: videoId,
        title,
        publishedAt: published,
        // Try maxresdefault, fall back to hqdefault
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      };
    });
  } catch (err) {
    console.error("Failed to fetch YouTube videos:", err);
    return [];
  }
}
