export interface HashnodePost {
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
  tags: { name: string }[];
  coverImage: { url: string } | null;
}

const RSS_URL = "https://thegatewayguy.hashnode.dev/rss.xml";

// Static cover image overrides — keyed by URL slug fragment
// Add entries here to pin a specific image to an article card
const COVER_OVERRIDES: Record<string, string> = {
  "kong-ai-gateway-on-kubernetes-proxy-openai-via-konnect": "/cover-kong-ai-gateway-k8s-openai.png",
  "kong-ai-gateway-on-kubernetes-apply-compliance-and-safety-policies-with-aws-guardrails": "/cover-kong-ai-gateway-k8s-guardrails.png",
};

function decodeCDATA(str: string): string {
  return str.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
}

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function extractAll(xml: string, tag: string): string[] {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "g");
  const results: string[] = [];
  let m;
  while ((m = re.exec(xml)) !== null) {
    results.push(decodeCDATA(m[1]).trim());
  }
  return results;
}

function extractFirst(xml: string, tag: string): string {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return m ? decodeCDATA(m[1]).trim() : "";
}

// Rough reading-time estimate: ~200 words/min
function estimateReadTime(text: string): number {
  const words = text.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function getHashnodePosts(count = 6): Promise<HashnodePost[]> {
  try {
    const res = await fetch(RSS_URL, {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`Hashnode RSS error: ${res.status}`);

    const xml = await res.text();

    // Split into <item> blocks
    const allItems = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];

    // Filter out posts not yet ready to feature publicly
    const EXCLUDED_SLUGS = [
      "monetize-your-mcp-server-usage-based-billing-for-the-github-mcp-server-with-kong-ai-gateway",
    ];
    const items = allItems.filter((item) => {
      const link = extractFirst(item, "link") || extractFirst(item, "guid");
      return !EXCLUDED_SLUGS.some((slug) => link.includes(slug));
    });

    return items.slice(0, count).map((item) => {
      const title = decodeEntities(extractFirst(item, "title"));
      const link = extractFirst(item, "link") || extractFirst(item, "guid");
      const description = decodeEntities(extractFirst(item, "description").replace(/<[^>]+>/g, " ").trim());
      const pubDate = extractFirst(item, "pubDate");
      const categories = extractAll(item, "category");
      const contentEncoded = extractFirst(item, "content:encoded");

      // Slug from URL
      const slug = link.split("/").filter(Boolean).pop() ?? "";

      // Cover image: check static overrides first, then Hashnode CDN cover path
      const overrideKey = Object.keys(COVER_OVERRIDES).find((k) => link.includes(k));
      const coverUrl = overrideKey
        ? COVER_OVERRIDES[overrideKey]
        : (contentEncoded.match(/src="(https:\/\/cdn\.hashnode\.com\/uploads\/covers\/[^"]+)"/) ??
           contentEncoded.match(/src='(https:\/\/cdn\.hashnode\.com\/uploads\/covers\/[^']+)'/) ??
           contentEncoded.match(/<img[^>]+src=["']([^"']+)["']/))?.[1] ?? null;

      return {
        title,
        brief: description.slice(0, 200) + (description.length > 200 ? "…" : ""),
        slug,
        url: link,
        publishedAt: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
        readTimeInMinutes: estimateReadTime(contentEncoded || description),
        tags: categories.slice(0, 4).map((name) => ({ name })),
        coverImage: coverUrl ? { url: coverUrl } : null,
      };
    });
  } catch (err) {
    console.error("Failed to fetch Hashnode posts:", err);
    return [];
  }
}
