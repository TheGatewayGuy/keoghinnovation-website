import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Kong AI Gateway deployment, AI platform strategy, and cloud-native engineering for teams building AI in production.",
};

const services = [
  {
    num: "01",
    icon: "🤖",
    title: "Kong AI Gateway",
    tagline: "The infrastructure layer your AI needs.",
    intro: "Kong AI Gateway is purpose-built to manage, govern, and scale LLM traffic in production. We specialise in deploying and operating it — so your teams can ship AI features without worrying about cost runaway, safety failures, or compliance gaps.",
    body: "Whether you're routing traffic to OpenAI, Anthropic, AWS Bedrock, or Azure OpenAI, we build the gateway layer that sits in front of your models and gives you full control. Two-time AI Hackathon winners at API Summit — we know this stack cold.",
    bullets: [
      "LLM proxying across providers (OpenAI, Anthropic, Bedrock, Azure OpenAI)",
      "AI safety controls — guardrails, PII filtering, content policy enforcement",
      "MCP server proxying, monitoring & usage-based monetisation",
      "Per-consumer rate limiting, cost tracking & usage metering",
      "Kong AI Gateway on Kubernetes (KIC, Helm, Konnect)",
      "AI observability — prompt/response logging, token tracking, anomaly detection",
    ],
  },
  {
    num: "02",
    icon: "🧠",
    title: "AI Platform Strategy & Implementation",
    tagline: "From AI prototype to governed production.",
    intro: "Most teams can get an LLM working in a notebook. The hard part is making it reliable, safe, and cost-effective in production — at scale, with real users, under real load.",
    body: "We help engineering and platform teams close that gap. From designing the right architecture for your agent workflows to building governance frameworks that actually hold up, we bring practical production experience — not slides.",
    bullets: [
      "AI architecture & readiness assessment",
      "Agent platform design (MCP, A2A, multi-agent workflows)",
      "AI governance, safety & compliance frameworks",
      "Model selection strategy & vendor lock-in mitigation",
      "LLM cost management & optimisation",
      "AI incident response planning",
    ],
  },
  {
    num: "03",
    icon: "☁️",
    title: "Platform & Cloud Engineering",
    tagline: "The foundations that AI workloads run on.",
    intro: "AI needs infrastructure. We design and build cloud-native platforms on AWS and Kubernetes that can support your AI services — reliable, observable, and built for the teams that will actually operate them.",
    body: "API management is part of this layer too — and we bring the same depth of expertise from the Kong ecosystem to non-AI API infrastructure, from Kong Gateway OSS to full Konnect deployments.",
    bullets: [
      "AWS architecture for AI workloads",
      "Kubernetes cluster design & management",
      "Infrastructure as Code (Terraform, Helm, GitOps)",
      "API management & Kong Gateway (OSS / Enterprise / Konnect)",
      "Platform engineering & developer experience",
      "Observability stack design",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-2 border-b border-white/[0.07] px-6 md:px-10 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">What We Do</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-4">Services</h1>
          <p className="text-muted text-xl max-w-xl leading-relaxed">
            AI-first consulting — from Kong AI Gateway deployments to agent platform design and the cloud infrastructure that supports it all.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map(({ num, icon, title, tagline, intro, body, bullets }, i) => (
        <section
          key={num}
          className={`px-6 md:px-10 py-20 border-b border-white/[0.07] ${i % 2 === 1 ? "bg-navy-2" : "bg-navy"}`}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-4">Service {num}</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-3">{title}</h2>
              <p className="text-accent font-semibold text-sm mb-6">{tagline}</p>
              <div className="text-4xl">{icon}</div>
            </div>

            {/* Right */}
            <div>
              <p className="text-offwhite leading-relaxed mb-4">{intro}</p>
              <p className="text-muted leading-relaxed mb-8">{body}</p>
              <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-muted mb-4">What&apos;s Included</h4>
              <ul className="divide-y divide-white/[0.06]">
                {bullets.map((b) => (
                  <li key={b} className="py-3 text-sm text-muted flex gap-3 items-start">
                    <span className="text-accent mt-0.5 shrink-0">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-gradient-to-br from-accent via-accent-dark to-accent-darker px-6 py-20 text-center">
        <h2 className="font-display font-bold text-4xl tracking-tight text-white mb-4">Not sure where to start?</h2>
        <p className="text-white/75 text-lg mb-8 max-w-sm mx-auto">
          Most engagements start with a conversation about what you&apos;re building and where it&apos;s breaking down.
        </p>
        <Link href="/contact" className="inline-block bg-white text-accent font-display font-bold px-8 py-3.5 rounded-lg hover:-translate-y-0.5 transition-all">
          Start a Conversation
        </Link>
      </section>
    </>
  );
}
