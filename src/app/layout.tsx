import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ToastProvider } from "@/components/ui/toast";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://mohsen-parsa-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mohsen Parsa — Frontend Engineer",
    template: "%s | Mohsen Parsa",
  },
  description:
    "Mohsen Parsa is a frontend engineer specializing in React, Next.js, and TypeScript. I build fast, accessible, and polished web experiences with modern JavaScript frameworks.",
  keywords: [
    "Mohsen Parsa",
    "frontend engineer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "JavaScript",
    "frontend developer",
    "web development",
    "UI engineer",
    "responsive design",
    "Afghanistan developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Redux",
  ],
  authors: [{ name: "Mohsen Parsa" }],
  creator: "Mohsen Parsa",
  publisher: "Mohsen Parsa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mohsen Parsa — Frontend Engineer",
    title: "Mohsen Parsa — Frontend Engineer",
    description:
      "Mohsen Parsa is a frontend engineer specializing in React, Next.js, and TypeScript. I build fast, accessible, and polished web experiences.",
    images: [
      {
        url: "/mohsen.png",
        width: 400,
        height: 400,
        alt: "Mohsen Parsa — Frontend Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohsen Parsa — Frontend Engineer",
    description:
      "Mohsen Parsa is a frontend engineer specializing in React, Next.js, and TypeScript. I build fast, accessible, and polished web experiences.",
    images: ["/mohsen.png"],
    creator: "@Mohsen_Parsa11",
  },
  icons: {
    icon: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohsen Parsa",
    url: SITE_URL,
    jobTitle: "Frontend Engineer",
    description:
      "Frontend engineer specializing in React, Next.js, and TypeScript. Building fast, accessible, and polished web experiences.",
    image: `${SITE_URL}/mohsen.png`,
    sameAs: [
      "https://github.com/Mohsen-Parsa11",
      "https://www.linkedin.com/in/mohsen-parsa/",
      "https://x.com/Mohsen_Parsa11",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "HTML",
      "CSS",
      "Git",
      "Frontend Development",
      "Web Development",
      "UI Engineering",
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Frontend Engineer",
        occupationalCategory: "15-1252.00",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        <ToastProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ToastProvider>
      </body>
    </html>
  );
}
