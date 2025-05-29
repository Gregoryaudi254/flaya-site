import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Flaya - Connect with Your Neighborhood",
  description: "Location-based social networking app fostering neighborhood connections. Share photos, videos, and stories with your local community while discovering nearby businesses.",
  keywords: "social network, neighborhood, local community, location-based, social media, local business",
  openGraph: {
    title: "Flaya - Connect with Your Neighborhood Like Never Before",
    description: "Join the location-based social network that brings communities together. Share moments, discover local businesses, and build meaningful connections with people around you.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flaya - Connect with Your Neighborhood",
    description: "Location-based social networking app fostering neighborhood connections.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
