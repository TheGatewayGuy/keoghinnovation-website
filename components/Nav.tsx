"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/content", label: "Content" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-[68px] bg-navy/90 backdrop-blur-md border-b border-white/[0.07]">
      {/* Logo */}
      <Link href="/" className="flex items-center h-10 shrink-0">
        <Image
          src="/keogh-lockup-white.svg"
          alt="Keogh Innovation"
          width={200}
          height={40}
          className="h-9 w-auto"
          priority
        />
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-7">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-[0.88rem] font-medium transition-colors ${
                pathname === href ? "text-offwhite" : "text-muted hover:text-offwhite"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/contact"
        className="hidden md:inline-flex items-center gap-1 bg-accent hover:bg-accent-dark text-white text-[0.85rem] font-semibold px-4 py-2 rounded-md transition-colors"
      >
        Get in Touch
      </Link>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-muted hover:text-offwhite p-1"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {open ? (
            <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[68px] left-0 right-0 bg-navy-2 border-b border-white/[0.07] md:hidden">
          <ul className="flex flex-col py-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block px-6 py-3 text-sm text-muted hover:text-offwhite"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="px-6 pt-3 pb-4">
              <Link
                href="/contact"
                className="block text-center bg-accent text-white text-sm font-semibold px-4 py-2 rounded-md"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
