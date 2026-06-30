export interface DevtoArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  cover_image: string | null;
  social_image: string;
}

const DEVTO_USERNAME = "thegatewayguy";

export async function getDevtoArticles(count = 6): Promise<DevtoArticle[]> {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=${count}`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 }, // ISR: revalidate every 5 minutes
      }
    );

    if (!res.ok) throw new Error(`dev.to API error: ${res.status}`);

    return await res.json();
  } catch (err) {
    console.error("Failed to fetch dev.to articles:", err);
    return [];
  }
}
