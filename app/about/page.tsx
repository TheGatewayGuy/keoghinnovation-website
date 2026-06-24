import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Keogh Innovation — founded by Andrew Kew, specialist in Kong, Kubernetes, and AI platform engineering.",
};

const creds = [
  { icon: "🏆", label: "2× AI Hackathon Winner — API Summit (2024 & 2025)" },
  { icon: "🎤", label: "Conference & Meetup Speaker" },
  { icon: "🔧", label: "Kong Gateway Specialist (OSS / Enterprise / Konnect)" },
  { icon: "☁️", label: "AWS & Kubernetes Expert" },
  { icon: "✍️", label: "14+ Published Technical Articles" },
  { icon: "▶️", label: "YouTube Creator — The Gateway Guy" },
];

const channels = [
  {
    icon: "▶️",
    title: "YouTube",
    sub: "The Gateway Guy",
    desc: "Hands-on video walkthroughs and live demos of Kong, Kubernetes, and AI platform tooling.",
    href: "https://www.youtube.com/@TheGatewayGuy",
    cta: "Watch →",
  },
  {
    icon: "📘",
    title: "Hashnode Tutorials",
    sub: "Production-grade guides",
    desc: "Step-by-step tutorials covering Kong AI Gateway, Kubernetes deployments, MCP billing, and more.",
    href: "https://thegatewayguy.hashnode.dev",
    cta: "Read →",
  },
  {
    icon: "✍️",
    title: "dev.to",
    sub: "Market analysis",
    desc: "What's moving in the AI and API space — and why it matters for engineering teams building today.",
    href: "https://dev.to/thegatewayguy",
    cta: "Read →",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-2 border-b border-white/[0.07] px-6 md:px-10 pt-32 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">About</p>
            <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tighter mb-6">
              Keogh Innovation
            </h1>
            <p className="text-offwhite leading-relaxed mb-4">
              A specialist consultancy built on deep technical expertise, community presence, and a genuine passion for platform engineering.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Keogh Innovation was founded by Andrew Kew — a platform and API engineer who has spent years at the intersection of cloud infrastructure, API management, and AI.
            </p>
            <p className="text-muted leading-relaxed">
              Andrew is a recognised practitioner in the Kong ecosystem and a regular voice in the platform engineering community. He&apos;s spoken at conferences and meetups on topics ranging from Kong Gateway architecture to AI governance, and has won the AI Hackathon at API Summit two years running.
            </p>
          </div>

          {/* Profile card */}
          <div className="bg-navy-3 border border-white/[0.07] rounded-xl p-8 text-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center font-display font-bold text-4xl text-white mx-auto mb-5">
              AK
            </div>
            <h2 className="font-display font-bold text-xl mb-1">Andrew Kew</h2>
            <p className="text-accent text-sm font-semibold mb-6">Founder, Keogh Innovation</p>
            <ul className="text-left space-y-0 divide-y divide-white/[0.06]">
              {creds.map(({ icon, label }) => (
                <li key={label} className="py-3 flex gap-3 items-start text-sm text-muted">
                  <span className="shrink-0">{icon}</span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gateway Guy section */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">The Gateway Guy</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">Content & Community</h2>
          <p className="text-muted text-lg max-w-xl leading-relaxed mb-12">
            Beyond client work, Andrew publishes regularly on topics that matter to platform engineers — under the brand <strong className="text-offwhite">The Gateway Guy</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {channels.map(({ icon, title, sub, desc, href, cta }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-2 border border-white/[0.07] rounded-xl p-6 hover:border-accent/40 hover:-translate-y-1 transition-all"
              >
                <span className="text-3xl block mb-4">{icon}</span>
                <h3 className="font-display font-bold text-base mb-1">{title}</h3>
                <p className="text-accent text-xs font-semibold mb-3">{sub}</p>
                <p className="text-muted text-sm leading-relaxed mb-5">{desc}</p>
                <span className="text-accent text-sm font-semibold">{cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-accent via-accent-dark to-accent-darker px-6 py-20 text-center">
        <h2 className="font-display font-bold text-4xl tracking-tight text-white mb-4">Let&apos;s work together.</h2>
        <p className="text-white/75 text-lg mb-8 max-w-sm mx-auto">
          Whether it&apos;s a project, a speaking gig, or a quick chat — we&apos;d love to hear from you.
        </p>
        <Link href="/contact" className="inline-block bg-white text-accent font-display font-bold px-8 py-3.5 rounded-lg hover:-translate-y-0.5 transition-all">
          Contact Us
        </Link>
      </section>
    </>
  );
}
