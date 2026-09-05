import { SmoothScroll } from "@/components/SmoothScroll";
import { ToastProvider } from "@/components/ui/toast";
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
        <ToastProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ToastProvider>
      </body>
    </html>
  );
}
