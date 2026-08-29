import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
