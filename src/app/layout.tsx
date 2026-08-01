import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NEXTRO Smart AV Solutions | Premium Interactive Displays & Video Conferencing",
  description: "Transform your spaces with NEXTRO's premium Smart AV Solutions. Interactive displays, video conferencing, digital signage for education and business.",
  keywords: ["Smart AV Solutions", "Interactive Displays", "Video Conferencing", "Digital Signage", "Smart Classroom", "PTZ Cameras", "Digital Podium", "Education Technology", "Corporate AV"],
  authors: [{ name: "NEXTRO" }],
  openGraph: {
    title: "NEXTRO Smart AV Solutions | Premium Interactive Displays & Video Conferencing",
    description: "Transform your spaces with NEXTRO's premium Smart AV Solutions. Interactive displays, video conferencing, digital signage for education and business.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXTRO Smart AV Solutions",
    description: "Premium Smart AV Solutions for modern education and business",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <PageTransition>{children}</PageTransition>
        </CartProvider>
      </body>
    </html>
  );
}
