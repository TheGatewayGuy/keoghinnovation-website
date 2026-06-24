import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getHashnodePosts } from "@/lib/hashnode";
import { getDevtoArticles } from "@/lib/devto";

export const metadata: Metadata = {
  title: "Content & Tutorials",
  description: "Tutorials, articles, and videos from The Gateway Guy — covering Kong, Kubernetes, AI platforms, and more.",
};

export const revalidate = 3600;

export default async function ContentPage() {
  const [hashnodePosts, devtoPosts] = await Promise.all([
    getHashnodePosts(9),
    getDevtoArticles(9),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-2 border-b border-white/[0.07] px-6 md:px-10 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">Resources</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-4">Content & Tutorials</h1>
          <p className="text-muted text-xl max-w-xl leading-relaxed">
            Tutorials, market analysis, and video content published regularly under the brand <em className="not-italic text-offwhite">The Gateway Guy</em>.
          </p>
        </div>
      </section>

      {/* Channel links */}
      <div className="bg-navy border-b border-white/[0.07] px-6 md:px-10 py-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
          {[
            { label: "📘 Hashnode Tutorials", href: "https://thegatewayguy.hashnode.dev" },
            { label: "✍️ dev.to Articles", href: "https://dev.to/thegatewayguy" },
            { label: "▶️ YouTube Channel", href: "https://www.youtube.com/@TheGatewayGuy" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-muted hover:text-offwhite border border-white/[0.1] hover:border-white/30 px-4 py-2 rounded-lg transition-all"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Hashnode */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-2">Step-by-step guides</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight">Hashnode Tutorials</h2>
            </div>
            <a
              href="https://thegatewayguy.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent hover:text-offwhite shrink-0"
            >
              View all →
            </a>
          </div>

          {hashnodePosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-5">
              {hashnodePosts.map((post) => (
                <ArticleCard
                  key={post.slug}
                  title={post.title}
                  description={post.brief}
                  url={post.url}
                  publishedAt={post.publishedAt}
                  tags={post.tags.map((t) => t.name)}
                  coverImage={post.coverImage?.url}
                  readTime={post.readTimeInMinutes}
                  source="hashnode"
                />
              ))}
            </div>
          ) : (
            <div className="bg-navy-2 border border-white/[0.07] rounded-xl p-8 text-center">
              <p className="text-muted">
                Visit{" "}
                <a href="https://thegatewayguy.hashnode.dev" className="text-accent" target="_blank" rel="noopener noreferrer">
                  thegatewayguy.hashnode.dev
                </a>{" "}
                for the latest tutorials.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* dev.to */}
      <section className="bg-navy-2 border-y border-white/[0.07] px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-2">Market awareness & analysis</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight">dev.to Articles</h2>
            </div>
            <a
              href="https://dev.to/thegatewayguy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent hover:text-offwhite shrink-0"
            >
              View all →
            </a>
          </div>

          {devtoPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-5">
              {devtoPosts.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  publishedAt={article.published_at}
                  tags={article.tag_list}
                  coverImage={article.cover_image}
                  readTime={article.reading_time_minutes}
                  source="devto"
                />
              ))}
            </div>
          ) : (
            <div className="bg-navy border border-white/[0.07] rounded-xl p-8 text-center">
              <p className="text-muted">
                Visit{" "}
                <a href="https://dev.to/thegatewayguy" className="text-accent" target="_blank" rel="noopener noreferrer">
                  dev.to/thegatewayguy
                </a>{" "}
                for the latest articles.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* YouTube */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-2">Video content</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">YouTube — The Gateway Guy</h2>
          <p className="text-muted max-w-xl leading-relaxed mb-8">
            Video walkthroughs and live demos of Kong, Kubernetes, and AI platform tooling. Watch the real thing — not slides.
          </p>
          <a
            href="https://www.youtube.com/@TheGatewayGuy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-6 py-3 rounded-lg text-sm"
          >
            ▶ Visit YouTube Channel
          </a>
        </div>
      </section>
    </>
  );
}
