import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Keogh Innovation — founded by Andrew Kew, AI platform engineer and Kong AI Gateway specialist. Two-time AI Hackathon winner at API Summit.",
};

const creds = [
  { icon: "🏆", label: "3× API Summit AI Hackathon — 2× Winner (2023, 2024) + 3rd Place (2025)" },
  { icon: "👑", label: "Kong Champion — Community Expert & Advocate" },
  { icon: "🎤", label: "Conference & Meetup Speaker" },
  { icon: "🤖", label: "Kong AI Gateway Specialist" },
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
              An AI platform consultancy built on real production experience, deep expertise in Kong AI Gateway, and a genuine passion for helping teams ship AI that actually works.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Keogh Innovation was founded by Andrew Kew — an AI platform engineer helping teams deploy LLMs safely, govern agents in production, and build the cloud-native foundations they run on.
            </p>
            <p className="text-muted leading-relaxed">
              Andrew is a recognised expert in the Kong AI Gateway ecosystem — LLM proxying, AI safety controls, MCP monetisation, and AI governance on Kubernetes. He&apos;s spoken at conferences and meetups worldwide on AI infrastructure, and has won the AI Hackathon at API Summit two years in a row.
            </p>
          </div>

          {/* Profile card */}
          <div className="bg-navy-3 border border-white/[0.07] rounded-xl p-8 text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 ring-2 ring-accent/30">
              <Image src="/gateway-guy-avatar.png" alt="Andrew Kew" width={112} height={112} className="w-full h-full object-cover" />
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

      {/* Kong Champion + Hackathon Badges */}
      <section className="px-6 md:px-10 py-20 border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Kong Champion */}
            <div>
              <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">Community</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-5">Kong Champion</h2>
              <p className="text-muted leading-relaxed mb-4">
                Andrew is recognised by Kong as a <strong className="text-offwhite">Kong Champion</strong> — a community designation awarded to practitioners who go above and beyond in sharing knowledge, helping others, and advancing the Kong ecosystem.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                From answering questions in the community forums to publishing in-depth tutorials and speaking at Kong-hosted events, Andrew is an active voice in the Kong and API Summit community.
              </p>
              <div className="inline-flex items-center gap-3 bg-navy-2 border border-white/[0.07] rounded-xl px-5 py-3">
                <Image src="/logo-kong.png" alt="Kong" width={32} height={32} className="w-8 h-8 object-contain" />
                <span className="font-display font-semibold text-offwhite text-sm">Kong Champion</span>
                <span className="text-[0.7rem] text-accent font-bold uppercase tracking-wider ml-1">Verified</span>
              </div>
            </div>

            {/* Hackathon Badges */}
            <div>
              <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">API Summit Hackathons</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-5">3 Years Running</h2>
              <p className="text-muted leading-relaxed mb-8">
                Competed and placed in the Kong API Summit AI Hackathon three years in a row — winning in 2023 and 2024, and placing 3rd in 2025 with the <em className="not-italic text-offwhite">Kong Auto Rollback AI Agent</em>.
              </p>
              <div className="flex gap-5 items-center">
                {[
                  { src: "/badge-2023.png", label: "2023 Winner" },
                  { src: "/badge-2024.png", label: "2024 Winner" },
                  { src: "/badge-2025.png", label: "2025 3rd Place" },
                ].map(({ src, label }) => (
                  <div key={src} className="flex flex-col items-center gap-2">
                    <Image src={src} alt={label} width={110} height={110} className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-lg" />
                    <span className="text-[0.7rem] text-muted font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
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
