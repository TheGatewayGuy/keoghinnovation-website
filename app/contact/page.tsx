import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Keogh Innovation — reach out to discuss AI platform projects, Kong AI Gateway, or speaking engagements.",
};

const links = [
  {
    icon: "✉️",
    title: "Email",
    value: "andrew@keoghinnovation.com",
    href: "mailto:andrew@keoghinnovation.com",
    desc: "Best for project enquiries and speaking requests. Typical response within 1–2 business days.",
  },
  {
    icon: "🔗",
    title: "LinkedIn",
    value: "Keogh Innovation",
    href: "https://www.linkedin.com/company/keogh-innovation/",
    desc: "Connect on LinkedIn for updates, announcements, and community discussion.",
  },
  {
    icon: "▶️",
    title: "YouTube — The Gateway Guy",
    value: "youtube.com/@TheGatewayGuy",
    href: "https://www.youtube.com/@TheGatewayGuy",
    desc: "Watch hands-on Kong AI Gateway and platform engineering content.",
  },
  {
    icon: "📘",
    title: "Hashnode Tutorials",
    value: "thegatewayguy.hashnode.dev",
    href: "https://thegatewayguy.hashnode.dev",
    desc: "Step-by-step production tutorials on Kong, Kubernetes, and AI infrastructure.",
  },
  {
    icon: "✍️",
    title: "dev.to Articles",
    value: "dev.to/thegatewayguy",
    href: "https://dev.to/thegatewayguy",
    desc: "AI and API market analysis — what's changing and why it matters.",
  },
  {
    icon: "📍",
    title: "Based In",
    value: "United Kingdom",
    href: null,
    desc: "Available for remote engagements worldwide and in-person in the UK.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-2 border-b border-white/[0.07] px-6 md:px-10 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">Contact</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tighter mb-4">Get in Touch</h1>
          <p className="text-muted text-xl max-w-lg mx-auto leading-relaxed">
            Whether you&apos;re exploring a project, looking for a speaker, or want to compare notes on Kong AI Gateway — reach out directly.
          </p>
        </div>
      </section>

      {/* Email CTA — primary */}
      <section className="px-6 md:px-10 py-16 border-b border-white/[0.07]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted text-sm mb-3">Drop an email directly to</p>
          <a
            href="mailto:andrew@keoghinnovation.com"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-display font-bold text-xl md:text-2xl px-8 py-5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <span>✉️</span>
            andrew@keoghinnovation.com
          </a>
          <p className="text-muted text-sm mt-4">Typical response: 1–2 business days</p>
        </div>
      </section>

      {/* Other channels */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl tracking-tight mb-8 text-center">Other Ways to Connect</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {links.filter(l => l.title !== "Email").map(({ icon, title, value, href, desc }) => (
              <div key={title} className="bg-navy-2 border border-white/[0.07] rounded-xl p-5 flex gap-4 items-start">
                <span className="text-xl shrink-0 mt-0.5">{icon}</span>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-0.5">{title}</h3>
                  {href ? (
                    <a href={href} target={href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer" className="text-accent text-sm hover:text-offwhite block mb-1">{value}</a>
                  ) : (
                    <p className="text-offwhite text-sm mb-1">{value}</p>
                  )}
                  <p className="text-muted text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
