import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Keogh Innovation — API management, AI strategy, and cloud platform consulting.",
};

const contactInfo = [
  {
    icon: "🔗",
    title: "LinkedIn",
    value: "Keogh Innovation",
    href: "https://www.linkedin.com/company/keogh-innovation/",
  },
  {
    icon: "▶️",
    title: "YouTube — The Gateway Guy",
    value: "youtube.com/@TheGatewayGuy",
    href: "https://www.youtube.com/@TheGatewayGuy",
  },
  {
    icon: "📘",
    title: "Tutorials (Hashnode)",
    value: "thegatewayguy.hashnode.dev",
    href: "https://thegatewayguy.hashnode.dev",
  },
  {
    icon: "✍️",
    title: "Articles (dev.to)",
    value: "dev.to/thegatewayguy",
    href: "https://dev.to/thegatewayguy",
  },
  {
    icon: "📍",
    title: "Based In",
    value: "United Kingdom",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-2 border-b border-white/[0.07] px-6 md:px-10 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-3">Contact</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tighter mb-4">Get in Touch</h1>
          <p className="text-muted text-xl max-w-lg leading-relaxed">
            Whether you&apos;re exploring a project, looking for a speaker, or just want to compare notes on Kong — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="font-display font-bold text-2xl tracking-tight mb-8">Send a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-[0.78rem] font-bold uppercase tracking-[0.08em] text-muted mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full bg-navy-2 border border-white/[0.1] text-offwhite rounded-lg px-4 py-3 text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-[0.78rem] font-bold uppercase tracking-[0.08em] text-muted mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full bg-navy-2 border border-white/[0.1] text-offwhite rounded-lg px-4 py-3 text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-[0.78rem] font-bold uppercase tracking-[0.08em] text-muted mb-2">
                  Company (optional)
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  className="w-full bg-navy-2 border border-white/[0.1] text-offwhite rounded-lg px-4 py-3 text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-[0.78rem] font-bold uppercase tracking-[0.08em] text-muted mb-2">
                  How can we help?
                </label>
                <select className="w-full bg-navy-2 border border-white/[0.1] text-offwhite rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent cursor-pointer">
                  <option value="" className="bg-navy-2">Select a topic...</option>
                  <option value="api" className="bg-navy-2">API Management & Kong Gateway</option>
                  <option value="ai" className="bg-navy-2">AI Platform Strategy</option>
                  <option value="cloud" className="bg-navy-2">Cloud & Platform Engineering</option>
                  <option value="speaking" className="bg-navy-2">Speaking Enquiry</option>
                  <option value="other" className="bg-navy-2">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[0.78rem] font-bold uppercase tracking-[0.08em] text-muted mb-2">
                  What are you working on?
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us a bit about your project or what you'd like to discuss..."
                  className="w-full bg-navy-2 border border-white/[0.1] text-offwhite rounded-lg px-4 py-3 text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white font-display font-semibold py-3.5 rounded-lg text-[0.95rem] transition-colors"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Info */}
          <div>
            <h2 className="font-display font-bold text-2xl tracking-tight mb-8">Other Ways to Connect</h2>
            <div className="space-y-0 divide-y divide-white/[0.07]">
              {contactInfo.map(({ icon, title, value, href }) => (
                <div key={title} className="py-5 flex gap-4 items-start">
                  <span className="text-xl shrink-0 mt-0.5">{icon}</span>
                  <div>
                    <h4 className="font-display font-semibold text-sm mb-0.5">{title}</h4>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent text-sm hover:text-offwhite"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-muted text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-8 bg-navy-2 border border-white/[0.07] rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <span className="font-semibold text-offwhite">Typical response time:</span> within 1–2 business days. For urgent enquiries, LinkedIn is fastest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
