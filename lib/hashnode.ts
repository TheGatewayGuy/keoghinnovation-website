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

const HASHNODE_GQL = "https://gql.hashnode.com/";
const PUBLICATION_HOST = "thegatewayguy.hashnode.dev";

export async function getHashnodePosts(count = 6): Promise<HashnodePost[]> {
  try {
    const query = `
      query GetPosts($host: String!, $first: Int!) {
        publication(host: $host) {
          posts(first: $first) {
            edges {
              node {
                title
                brief
                slug
                url
                publishedAt
                readTimeInMinutes
                tags { name }
                coverImage { url }
              }
            }
          }
        }
      }
    `;

    const res = await fetch(HASHNODE_GQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { host: PUBLICATION_HOST, first: count } }),
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!res.ok) throw new Error(`Hashnode API error: ${res.status}`);

    const data = await res.json();
    const edges = data?.data?.publication?.posts?.edges ?? [];
    return edges.map((e: { node: HashnodePost }) => e.node);
  } catch (err) {
    console.error("Failed to fetch Hashnode posts:", err);
    return [];
  }
}
