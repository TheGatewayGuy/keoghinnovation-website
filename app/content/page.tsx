import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import YouTubeCard from "@/components/YouTubeCard";
import { getHashnodePosts } from "@/lib/hashnode";
import { getDevtoArticles } from "@/lib/devto";
import { getYouTubeVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Content & Tutorials",
  description: "Tutorials, articles, conference talks and videos from The Gateway Guy — covering Kong AI Gateway, Kubernetes, AI platforms, and more.",
};

export const revalidate = 3600;

const PINNED_VIDEO_ID = "fMDMgSNbmC8";

const conferenceTalks = [
  {
    id: "8-HgAIUTEHM",
    title: "Create, Explore, Manage: Improving Developer Experience with Konnect Developer Portal",
    event: "Kong Summit",
    description:
      "Developer experience is often the difference between an API platform engineers love and one they route around. In this talk, Andrew explores how Kong's Konnect Developer Portal changes the dynamic — giving API consumers a self-serve hub to discover, explore, and subscribe to APIs without hunting down documentation or chasing approvals. The session covers the end-to-end flow from publishing APIs to the portal through to consumer onboarding, credential management, and access control — all within Konnect's managed control plane. Practical, demo-driven, and grounded in real-world API platform challenges.",
  },
  {
    id: "t7fFNvaE768",
    title: "Federated Data Authorization using Semantic Policies",
    event: "Conference Talk",
    description:
      "Authorization at the data layer is one of the harder problems in platform engineering — especially when data lives across multiple services, teams, and domains. This talk digs into federated data authorization: how to enforce fine-grained, context-aware access control across a distributed system without creating a centralized bottleneck or duplicating policy logic everywhere. Andrew introduces semantic policies as a way to express authorization rules in human-readable, intent-driven terms — and shows how these can be evaluated at the API gateway layer using Kong, keeping enforcement consistent across services without coupling it to application code.",
  },
  {
    id: "zSX_k2ewSxY",
    title: "Next Generation Observability: Kong + AI",
    event: "Kong Summit",
    description:
      "Traditional observability — metrics, logs, traces — tells you what happened. AI-powered observability starts to tell you why, and what to do about it. In this session, Andrew explores how Kong Gateway's deep visibility into API traffic can be combined with AI to move from reactive dashboards to proactive intelligence. Topics include using LLMs to summarise and interpret traffic anomalies, correlating Kong's request/response logs with model performance in AI gateway deployments, and how the Kong AI Gateway's native observability features give platform teams the signal they need to operate AI infrastructure confidently in production.",
  },
];

export default async function ContentPage() {
  const [hashnodePosts, devtoPosts, youtubeVideos] = await Promise.all([
    getHashnodePosts(9),
    getDevtoArticles(9),
    getYouTubeVideos(6),
  ]);

  // Exclude the pinned video from the "latest" grid
  const latestVideos = youtubeVideos.filter((v) => v.id !== PINNED_VIDEO_ID);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-2 border-b border-white/[0.07] px-6 md:px-10 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">Resources</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-4">Content & Tutorials</h1>
          <p className="text-muted text-xl max-w-xl leading-relaxed">
            Tutorials, market analysis, conference talks, and video content published regularly under the brand{" "}
            <em className="not-italic text-offwhite">The Gateway Guy</em>.
          </p>
        </div>
      </section>

      {/* Channel quick links */}
      <div className="bg-navy border-b border-white/[0.07] px-6 md:px-10 py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3">
          {[
            { label: "▶️ YouTube", href: "https://www.youtube.com/@TheGatewayGuy" },
            { label: "📘 Hashnode Tutorials", href: "https://thegatewayguy.hashnode.dev" },
            { label: "✍️ dev.to Articles", href: "https://dev.to/thegatewayguy" },
          ].map(({ label, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-muted hover:text-offwhite border border-white/[0.1] hover:border-white/30 px-4 py-2 rounded-lg transition-all">
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* ── YOUTUBE — PINNED ── */}
      <section className="px-6 md:px-10 py-20 border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-2">Featured Video</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight">YouTube — The Gateway Guy</h2>
            </div>
            <a href="https://www.youtube.com/@TheGatewayGuy" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-accent hover:text-offwhite shrink-0">
              View channel →
            </a>
          </div>

          {/* Pinned video — full width */}
          <div className="rounded-xl overflow-hidden border border-white/[0.07] bg-navy-2 mb-6">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${PINNED_VIDEO_ID}?rel=0`}
                title="Featured video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Latest videos grid */}
          {latestVideos.length > 0 && (
            <>
              <p className="text-muted text-sm font-semibold uppercase tracking-wider mb-4">Latest Videos</p>
              <div className="grid md:grid-cols-3 gap-5">
                {latestVideos.map((video) => (
                  <YouTubeCard key={video.id} videoId={video.id} title={video.title}
                    publishedAt={video.publishedAt} thumbnail={video.thumbnail} />
                ))}
              </div>
            </>
          )}

          {!youtubeVideos.length && (
            <div className="bg-navy-2 border border-white/[0.07] rounded-xl p-6 text-center mt-4">
              <p className="text-muted text-sm mb-3">Set <code className="text-accent">YOUTUBE_CHANNEL_ID</code> in Vercel to load latest videos automatically.</p>
              <a href="https://www.youtube.com/@TheGatewayGuy" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-5 py-2.5 rounded-lg text-sm">
                ▶ Visit YouTube Channel
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── CONFERENCE TALKS ── */}
      <section className="bg-navy-2 border-b border-white/[0.07] px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">Speaking</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">Conference Talks</h2>
          <p className="text-muted text-lg max-w-xl leading-relaxed mb-14">
            Andrew speaks regularly at conferences and meetups on Kong AI Gateway, API platform engineering, and AI observability.
          </p>

          <div className="space-y-16">
            {conferenceTalks.map(({ id, title, event, description }) => (
              <div key={id} className="grid md:grid-cols-2 gap-10 items-start pb-16 border-b border-white/[0.06] last:border-0 last:pb-0">
                {/* Video embed */}
                <div className="rounded-xl overflow-hidden border border-white/[0.07] bg-navy-3">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?rel=0`}
                      title={title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <span className="inline-block text-[0.7rem] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded mb-4">
                    {event}
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-4 leading-snug">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{description}</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-offwhite text-sm font-semibold"
                  >
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HASHNODE TUTORIALS ── */}
      <section className="px-6 md:px-10 py-20 border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-2">Step-by-step guides</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight">Hashnode Tutorials</h2>
            </div>
            <a href="https://thegatewayguy.hashnode.dev" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-accent hover:text-offwhite shrink-0">View all →</a>
          </div>
          {hashnodePosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-5">
              {hashnodePosts.map((post) => (
                <ArticleCard key={post.slug} title={post.title} description={post.brief}
                  url={post.url} publishedAt={post.publishedAt} tags={post.tags.map((t) => t.name)}
                  coverImage={post.coverImage?.url} readTime={post.readTimeInMinutes} source="hashnode" />
              ))}
            </div>
          ) : (
            <div className="bg-navy-2 border border-white/[0.07] rounded-xl p-8 text-center">
              <p className="text-muted">Visit <a href="https://thegatewayguy.hashnode.dev" className="text-accent" target="_blank" rel="noopener noreferrer">thegatewayguy.hashnode.dev</a> for the latest tutorials.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── DEV.TO ARTICLES ── */}
      <section className="bg-navy-2 border-b border-white/[0.07] px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-2">Market awareness & analysis</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight">dev.to Articles</h2>
            </div>
            <a href="https://dev.to/thegatewayguy" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-accent hover:text-offwhite shrink-0">View all →</a>
          </div>
          {devtoPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-5">
              {devtoPosts.map((article) => (
                <ArticleCard key={article.id} title={article.title} description={article.description}
                  url={article.url} publishedAt={article.published_at} tags={article.tag_list}
                  coverImage={article.cover_image} readTime={article.reading_time_minutes} source="devto" />
              ))}
            </div>
          ) : (
            <div className="bg-navy border border-white/[0.07] rounded-xl p-8 text-center">
              <p className="text-muted">Visit <a href="https://dev.to/thegatewayguy" className="text-accent" target="_blank" rel="noopener noreferrer">dev.to/thegatewayguy</a> for the latest articles.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
