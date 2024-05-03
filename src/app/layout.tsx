import type { Metadata, Viewport } from "next";
import { Bebas_Neue } from "next/font/google";
import { ClerkProvider, UserButton } from "@clerk/nextjs";

import "./globals.css";

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true
}

export const metadata: Metadata = {
  title: "Game of the Week",
  description:
    'Decide which of the two games displayed deserve the title of "Game of the Week"',
  authors: [{ name: "Robert", url: "https://robert-chapman.vercel.app" }],
  applicationName: 'Game of the Week',
  referrer: 'origin-when-cross-origin',
  keywords: ["Gaming", "Video Games", 'Games'],
  creator: 'Robert Chapman',
  publisher: 'Robert Chapman',
  formatDetection: {
    address: false,
    date: false,
    email: false,
    telephone: false,
    url: false
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${bebas_neue.variable} bg-background`}>
          <div className="absolute right-4 top-4">
            <UserButton />
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
