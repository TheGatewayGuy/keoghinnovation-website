import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Keogh Innovation — Platform & AI Consulting",
    template: "%s | Keogh Innovation",
  },
  description:
    "AI platform consultancy specialising in Kong AI Gateway, LLM infrastructure, and cloud-native engineering. Helping teams build, govern, and scale AI in production.",
  openGraph: {
    title: "Keogh Innovation — Platform & AI Consulting",
    description:
      "Specialist consultancy in API management, AI platform strategy, and cloud-native engineering.",
    url: "https://keoghinnovation.com",
    siteName: "Keogh Innovation",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-navy text-offwhite">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
