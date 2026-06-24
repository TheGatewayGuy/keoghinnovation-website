import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conferences & Talks",
  description: "Conference talks and presentations by Andrew Kew — covering Kong AI Gateway, API platform engineering, observability, and developer experience.",
};

const talks = [
  {
    id: "8-HgAIUTEHM",
    title: "Create, Explore, Manage: Improving Developer Experience with Konnect Developer Portal",
    event: "Kong Summit",
    tags: ["Kong", "Konnect", "Developer Experience", "APIs"],
    description:
      "Developer experience is often the difference between an API platform engineers love and one they route around. In this talk, Andrew explores how Kong's Konnect Developer Portal changes the dynamic — giving API consumers a self-serve hub to discover, explore, and subscribe to APIs without hunting down documentation or chasing approvals.",
    detail:
      "The session covers the end-to-end flow from publishing APIs to the portal through to consumer onboarding, credential management, and access control — all within Konnect's managed control plane. Practical, demo-driven, and grounded in real-world API platform challenges that any team running Kong at scale will recognise.",
  },
  {
    id: "t7fFNvaE768",
    title: "Federated Data Authorization using Semantic Policies",
    event: "Conference Talk",
    tags: ["Authorization", "Security", "APIs", "Platform Engineering"],
    description:
      "Authorization at the data layer is one of the harder problems in platform engineering — especially when data lives across multiple services, teams, and domains. This talk digs into federated data authorization: how to enforce fine-grained, context-aware access control across a distributed system without creating a centralized bottleneck or duplicating policy logic everywhere.",
    detail:
      "Andrew introduces semantic policies as a way to express authorization rules in human-readable, intent-driven terms — and shows how these can be evaluated at the API gateway layer using Kong, keeping enforcement consistent across services without coupling it to application code. The result: authorization that scales with your platform, not against it.",
  },
  {
    id: "zSX_k2ewSxY",
    title: "Next Generation Observability: Kong + AI",
    event: "Kong Summit",
    tags: ["Observability", "AI", "Kong", "Platform Engineering"],
    description:
      "Traditional observability — metrics, logs, traces — tells you what happened. AI-powered observability starts to tell you why, and what to do about it. In this session, Andrew explores how Kong Gateway's deep visibility into API traffic can be combined with AI to move from reactive dashboards to proactive intelligence.",
    detail:
      "Topics include using LLMs to summarise and interpret traffic anomalies, correlating Kong's request/response logs with model performance in AI gateway deployments, and how the Kong AI Gateway's native observability features give platform teams the signal they need to operate AI infrastructure confidently in production. A practical look at the next generation of platform operations.",
  },
];

export default function ConferencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-2 border-b border-white/[0.07] px-6 md:px-10 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">Speaking</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-4">
            Conferences & Talks
          </h1>
          <p className="text-muted text-xl max-w-xl leading-relaxed">
            Andrew speaks at conferences and meetups worldwide on Kong AI Gateway, API platform engineering, AI observability, and developer experience.
          </p>
        </div>
      </section>

      {/* Speaking topics strip */}
      <div className="bg-navy border-b border-white/[0.07] px-6 md:px-10 py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
          {["Kong AI Gateway", "API Platform Engineering", "AI Observability", "Developer Experience", "Authorization & Security", "Kubernetes"].map((topic) => (
            <span key={topic} className="text-[0.75rem] font-semibold text-muted border border-white/[0.1] px-3 py-1.5 rounded-full">
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Talks */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto space-y-0">
          {talks.map(({ id, title, event, tags, description, detail }, i) => (
            <div
              key={id}
              className={`grid md:grid-cols-2 gap-10 items-start py-16 border-b border-white/[0.06] ${i === 0 ? "pt-0" : ""}`}
            >
              {/* Video — alternates sides */}
              <div className={`rounded-xl overflow-hidden border border-white/[0.07] bg-navy-2 ${i % 2 === 1 ? "md:order-2" : ""}`}>
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
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded">
                    {event}
                  </span>
                  {tags.map((tag) => (
                    <span key={tag} className="text-[0.7rem] font-semibold text-muted border border-white/[0.08] px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-4 leading-snug">
                  {title}
                </h2>

                <p className="text-offwhite text-sm leading-relaxed mb-3">{description}</p>
                <p className="text-muted text-sm leading-relaxed mb-6">{detail}</p>

                <a
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-offwhite text-sm font-semibold transition-colors"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speaking CTA */}
      <section className="bg-navy-2 border-t border-white/[0.07] px-6 md:px-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">Book a Speaker</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">
            Interested in having Andrew speak?
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Available for conferences, meetups, workshops, and podcast appearances on Kong AI Gateway, AI platform engineering, and cloud-native topics.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-display font-bold px-8 py-3.5 rounded-lg hover:-translate-y-0.5 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
