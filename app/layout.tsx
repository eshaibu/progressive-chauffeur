import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Progressive Chauffeur Services | Elite Private Transfers',
  description: 'Premium private transfers, airport transfers, and corporate travel across Ireland. Luxury fleet including Mercedes V-Class, BMW 5 Series, and Audi A6.',
  keywords: ['Chauffeur Dublin', 'Airport Transfer', 'Mercedes V-Class hire', 'Executive Travel Ireland'],
  openGraph: {
    title: 'Progressive Chauffeur Services',
    description: 'Elite private chauffeur fleet based in Dublin.',
    url: 'https://progressivechauffeurs.ie',
    siteName: 'Progressive Chauffeur Services',
    locale: 'en_IE',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
