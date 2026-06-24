import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getHashnodePosts } from "@/lib/hashnode";
import { getDevtoArticles } from "@/lib/devto";

export const revalidate = 3600; // ISR: rebuild every hour

const services = [
  {
    icon: "🤖",
    title: "Kong AI Gateway",
    desc: "The infrastructure layer your AI needs. We design, deploy, and operate Kong AI Gateway — routing LLM traffic safely across providers with rate limiting, cost controls, compliance, and full observability.",
    bullets: ["LLM proxying (OpenAI, Anthropic, Bedrock, Azure)", "AI safety: guardrails, PII filtering, content controls", "MCP server proxying & monetisation", "Per-consumer rate limiting & usage metering"],
  },
  {
    icon: "🧠",
    title: "AI Platform Strategy",
    desc: "We help teams move AI from prototype to production — governed, observable, and built to scale. Real production experience, not slides.",
    bullets: ["AI readiness & architecture assessment", "Agent platform design (MCP, A2A, tool use)", "AI governance & compliance frameworks", "Model selection, cost management & vendor strategy"],
  },
  {
    icon: "☁️",
    title: "Platform & Cloud Engineering",
    desc: "Cloud-native foundations on AWS and Kubernetes that support your AI workloads — reliable, observable, and built for the teams that run them.",
    bullets: ["AWS architecture & implementation", "Kubernetes for AI workloads", "API management & Kong Gateway (non-AI)", "Infrastructure as Code (Terraform, Helm)"],
  },
];

export default async function Home() {
  // Fetch latest 3 posts from each source in parallel
  const [hashnodePosts, devtoPosts] = await Promise.all([
    getHashnodePosts(3),
    getDevtoArticles(3),
  ]);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute w-[600px] h-[600px] rounded-full hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] pointer-events-none" />

        {/* Badge */}
        <div className="relative inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-[#5ab3e8] text-[0.75rem] font-bold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
          Platform & AI Consulting
        </div>

        <h1 className="relative font-display font-bold text-5xl md:text-7xl tracking-tighter leading-[1.1] max-w-4xl mb-6">
          AI Infrastructure,{" "}
          <em className="not-italic text-accent">Built to Last</em>
        </h1>

        <p className="relative text-muted text-lg md:text-xl max-w-[600px] leading-relaxed mb-10">
          We help engineering teams deploy AI safely and at scale — specialising in Kong AI Gateway, LLM infrastructure, agent platforms, and the cloud-native foundations they run on.
        </p>

        <div className="relative flex flex-wrap gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-6 py-3 rounded-lg text-[0.95rem]"
          >
            Explore Services →
          </Link>
          <Link
            href="/content"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-offwhite font-display font-semibold px-6 py-3 rounded-lg text-[0.95rem]"
          >
            ▶ Watch Our Content
          </Link>
        </div>
      </section>

      {/* ── PROOF BAR ── */}
      <div className="bg-navy-2 border-y border-white/[0.07] py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { icon: "🏆", text: "2× AI Hackathon Winner", sub: "API Summit" },
            { icon: "🎤", text: "Conference & Meetup Speaker", sub: "" },
            { icon: "🤖", text: "Kong AI Gateway Specialists", sub: "" },
            { icon: "☁️", text: "AWS & Kubernetes Experts", sub: "" },
          ].map(({ icon, text, sub }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-muted">
              <span>{icon}</span>
              <span className="font-semibold text-offwhite">{text}</span>
              {sub && <span>— {sub}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="px-6 md:px-10 py-24 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">Services</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">What We Do</h2>
          <p className="text-muted text-lg max-w-lg leading-relaxed">
            Specialist consulting with real production experience — not slides.
          </p>
        </div>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07] border border-white/[0.07] rounded-xl overflow-hidden">
          {services.map(({ icon, title, desc, bullets }) => (
            <div key={title} className="bg-navy-2 hover:bg-navy-3 p-8 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl mb-6">
                {icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-3">{title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{desc}</p>
              <ul className="space-y-1.5">
                {bullets.map((b) => (
                  <li key={b} className="text-[0.83rem] text-muted flex gap-2">
                    <span className="text-accent mt-0.5 shrink-0">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── LATEST CONTENT (dynamic) ── */}
      <section className="bg-navy-2 border-y border-white/[0.07] px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">Latest Tutorials</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">From Hashnode</h2>
            </div>
            <a
              href="https://thegatewayguy.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-offwhite text-sm font-semibold shrink-0"
            >
              All tutorials →
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
            <p className="text-muted text-sm">
              Tutorials loading — visit{" "}
              <a href="https://thegatewayguy.hashnode.dev" className="text-accent" target="_blank" rel="noopener noreferrer">
                thegatewayguy.hashnode.dev
              </a>{" "}
              directly.
            </p>
          )}

          <div className="mt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">Latest Articles</p>
                <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">From dev.to</h2>
              </div>
              <a
                href="https://dev.to/thegatewayguy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-offwhite text-sm font-semibold shrink-0"
              >
                All articles →
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
              <p className="text-muted text-sm">
                Articles loading — visit{" "}
                <a href="https://dev.to/thegatewayguy" className="text-accent" target="_blank" rel="noopener noreferrer">
                  dev.to/thegatewayguy
                </a>{" "}
                directly.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section className="px-6 md:px-10 py-24 max-w-6xl mx-auto">
        <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">Recognition</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-10">Recognised in the Industry</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              icon: "🏆",
              title: "AI Hackathon Winner — 2024 & 2025",
              meta: "API Summit",
              desc: "Two consecutive years building the best AI-powered solutions at one of the API industry's flagship events — demonstrating practical AI capability under competitive conditions.",
            },
            {
              icon: "🎤",
              title: "Conference & Meetup Speaker",
              meta: "Platform Engineering & AI",
              desc: "Sharing practical knowledge on Kong, Kubernetes, and AI platform engineering with engineering communities — from major conferences to hands-on meetups worldwide.",
            },
          ].map(({ icon, title, meta, desc }) => (
            <div key={title} className="relative bg-navy-2 border border-white/[0.07] rounded-xl p-8 card-accent overflow-hidden">
              <span className="text-4xl block mb-4">{icon}</span>
              <h3 className="font-display font-bold text-xl mb-1">{title}</h3>
              <p className="text-accent text-sm font-semibold mb-4">{meta}</p>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="bg-navy-2 border-y border-white/[0.07] px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-navy-3 border border-white/[0.07] rounded-xl p-8 text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5 ring-2 ring-accent/30">
              <Image src="/gateway-guy-avatar.png" alt="Andrew Kew" width={96} height={96} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display font-bold text-xl mb-1">Andrew Kew</h3>
            <p className="text-muted text-sm mb-5">Founder, Keogh Innovation</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Kong Specialist", "AWS", "Kubernetes", "AI Gateway", "2× Hackathon Winner", "Speaker"].map((tag) => (
                <span key={tag} className="text-[0.72rem] font-semibold text-[#93b4fd] bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">About</p>
            <h2 className="font-display font-bold text-4xl tracking-tight mb-5">Built on Real Experience</h2>
            <p className="text-muted leading-relaxed mb-4">
              Keogh Innovation was founded by Andrew Kew — an AI platform engineer helping teams deploy LLMs safely, govern agents at scale, and build the infrastructure that makes it all work in production.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              A two-time AI Hackathon winner at API Summit and deep expert in Kong AI Gateway. Under the brand <strong className="text-offwhite">The Gateway Guy</strong>, Andrew publishes hands-on AI infrastructure tutorials and analysis followed by engineers worldwide.
            </p>
            <div className="flex gap-8 mb-8">
              {[{ num: "14+", label: "Published articles" }, { num: "2×", label: "Hackathon wins" }, { num: "3", label: "Content platforms" }].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display font-bold text-3xl text-offwhite">{num}</div>
                  <div className="text-muted text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold px-5 py-2.5 rounded-lg text-sm"
            >
              More About Andrew →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-gradient-to-br from-accent via-accent-dark to-accent-darker px-6 py-20 text-center">
        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-white mb-4">
          Ready to modernise your platform?
        </h2>
        <p className="text-white/75 text-lg mb-8 max-w-md mx-auto">
          Most engagements start with a conversation. Tell us what you&apos;re building.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-accent hover:text-accent-dark font-display font-bold px-8 py-3.5 rounded-lg text-[0.95rem] hover:-translate-y-0.5 hover:shadow-2xl transition-all"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
