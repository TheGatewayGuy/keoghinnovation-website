import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import YouTubeCard from "@/components/YouTubeCard";
import { getHashnodePosts } from "@/lib/hashnode";
import { getDevtoArticles } from "@/lib/devto";
import { getYouTubeVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Content & Tutorials",
  description: "Tutorials, articles, conference talks and videos from The Gateway Guy — covering Kong AI Gateway, Kubernetes, AI platforms, and more.",
};

export const revalidate = 300; // ISR: rebuild every 5 minutes

const PINNED_VIDEO_ID = "fMDMgSNbmC8";


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

      {/* Conference talks teaser */}
      <section className="bg-navy-3 border-b border-white/[0.07] px-6 md:px-10 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-1">Speaking</p>
            <p className="font-display font-bold text-lg text-offwhite">Watch Andrew&apos;s conference talks →</p>
          </div>
          <Link href="/conferences" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-5 py-2.5 rounded-lg text-sm shrink-0">
            View All Talks
          </Link>
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
