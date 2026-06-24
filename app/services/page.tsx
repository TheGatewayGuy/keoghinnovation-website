import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Specialist consulting in API management, AI platform strategy, and cloud-native engineering.",
};

const services = [
  {
    num: "01",
    icon: "🔌",
    title: "API Management & Kong Gateway",
    intro: "Kong is the industry standard for API management at scale — and we're specialists in it. From initial architecture design through hands-on implementation to team enablement, we help you get Kong running in production, properly.",
    body: "Whether you're deploying on Kubernetes with Kong Ingress Controller, running on Konnect's managed control plane, or building out an enterprise-grade API platform, we've done it before and we'll do it right.",
    bullets: [
      "Architecture design & strategy",
      "Kong Gateway installation & configuration (OSS / Enterprise / Konnect)",
      "Kong on Kubernetes (KIC, Helm, GitOps)",
      "AI Gateway configuration — LLM proxying, rate limiting, safety controls",
      "Custom plugin development",
      "Team training & documentation",
    ],
  },
  {
    num: "02",
    icon: "🧠",
    title: "AI Platform Strategy & Implementation",
    intro: "The question isn't whether to adopt AI — it's how to do it without introducing risk, vendor lock-in, or technical debt.",
    body: "We help engineering and platform teams build AI capabilities that are governed, observable, and actually useful. From routing LLM traffic through Kong AI Gateway with compliance controls, to designing agent frameworks with proper sandboxing and audit trails, we bring practical production experience — not slides.",
    bullets: [
      "AI readiness assessment",
      "LLM routing and gateway architecture (Kong AI Gateway)",
      "AI safety & compliance frameworks (guardrails, content filtering, PII protection)",
      "Agent platform design (MCP, A2A, tool use)",
      "Usage metering & cost management",
    ],
  },
  {
    num: "03",
    icon: "☁️",
    title: "Cloud & Platform Engineering",
    intro: "We design and build cloud-native platforms on AWS and Kubernetes — reliable, observable, and built for the teams that will actually run them.",
    body: "Whether you're migrating workloads, modernising infrastructure, or building from scratch, we work with your team to deliver something that lasts.",
    bullets: [
      "AWS architecture & implementation",
      "Kubernetes cluster design and management",
      "Infrastructure as Code (Terraform, Helm, GitOps)",
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
          <p className="text-muted text-xl max-w-lg leading-relaxed">
            Specialist consulting in API management, AI platforms, and cloud-native engineering.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map(({ num, icon, title, intro, body, bullets }, i) => (
        <section
          key={num}
          className={`px-6 md:px-10 py-20 border-b border-white/[0.07] ${i % 2 === 1 ? "bg-navy-2" : "bg-navy"}`}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-4">Service {num}</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-6">{title}</h2>
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
        <h2 className="font-display font-bold text-4xl tracking-tight text-white mb-4">Not sure what you need?</h2>
        <p className="text-white/75 text-lg mb-8 max-w-sm mx-auto">
          Most engagements start with a conversation. Tell us what you&apos;re building.
        </p>
        <Link href="/contact" className="inline-block bg-white text-accent font-display font-bold px-8 py-3.5 rounded-lg hover:-translate-y-0.5 transition-all">
          Start a Conversation
        </Link>
      </section>
    </>
  );
}
