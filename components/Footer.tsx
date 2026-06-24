import Link from "next/link";
import Image from "next/image";

const services = [
  "API Management & Kong Gateway",
  "AI Platform Strategy",
  "Cloud & Platform Engineering",
];

const content = [
  { label: "YouTube", href: "https://www.youtube.com/@TheGatewayGuy" },
  { label: "Hashnode Tutorials", href: "https://thegatewayguy.hashnode.dev" },
  { label: "dev.to Articles", href: "https://dev.to/thegatewayguy" },
];

const connect = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/keogh-innovation/" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#040810] border-t border-white/[0.07] pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center p-0.5 shrink-0">
                <Image src="/keogh-cog-box.png" alt="Keogh Innovation cog" width={26} height={26} className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-base tracking-tight text-offwhite">
                Keogh <span className="text-accent">Innovation</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-[240px]">
              Specialist consulting in platform engineering, API management, and AI strategy. Founded 2024.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-muted mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-[0.85rem] text-white/40 hover:text-offwhite">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div>
            <h4 className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-muted mb-4">Content</h4>
            <ul className="space-y-2">
              {content.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-white/40 hover:text-offwhite">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-muted mb-4">Connect</h4>
            <ul className="space-y-2">
              {connect.map(({ label, href }) => (
                <li key={href}>
                  {href.startsWith("/") ? (
                    <Link href={href} className="text-[0.85rem] text-white/40 hover:text-offwhite">{label}</Link>
                  ) : (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-white/40 hover:text-offwhite">{label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">© {new Date().getFullYear()} Keogh Innovation Ltd. All rights reserved.</p>
          <div className="flex gap-3">
            {[
              { label: "in", href: "https://www.linkedin.com/company/keogh-innovation/" },
              { label: "▶", href: "https://www.youtube.com/@TheGatewayGuy" },
              { label: "✍", href: "https://dev.to/thegatewayguy" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md border border-white/[0.08] flex items-center justify-center text-muted hover:border-accent hover:text-offwhite text-xs"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
