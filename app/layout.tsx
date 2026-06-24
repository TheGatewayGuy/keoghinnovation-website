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
    "Specialist consultancy in API management, AI platform strategy, and cloud-native engineering. Experts in Kong API Gateway, Kubernetes, and AWS.",
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
