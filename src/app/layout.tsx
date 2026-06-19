import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jahnavi & Penchalaswamy Wedding | 02 July 2026",
  description:
    "You are cordially invited to celebrate the sacred wedding of Jahnavi and Penchalaswamy M.S. on 02 July 2026 at DGP Kalyana Mandapam, Nellore. Join us for this joyous occasion blessed by Lord Ganesha.",
  keywords: [
    "Jahnavi",
    "Penchalaswamy",
    "Wedding",
    "Indian Wedding",
    "Hindu Wedding",
    "Nellore",
    "Nalugu",
  ],
  openGraph: {
    title: "Jahnavi & Penchalaswamy Wedding",
    description:
      "Join us in celebrating the sacred wedding of Jahnavi and Penchalaswamy M.S. — 02 July 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Great+Vibes&family=Outfit:wght@100;200;300;400;500;600&family=Noto+Sans+Telugu:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
