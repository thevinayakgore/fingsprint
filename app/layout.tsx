import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fingsprint.vercel.app"),
  title: {
    default: "FingSprint — Test and Improve Your Typing Speed",
    template: "%s | FingSprint",
  },
  description:
    "Test and improve your typing speed with real-time metrics. Track your WPM, accuracy, and progress over time with FingSprint.",
  keywords: [
    "typing test",
    "typing speed test",
    "WPM test",
    "words per minute",
    "typing accuracy",
    "typing practice",
    "keyboard typing",
    "typing tracker",
    "FingSprint",
  ],
  authors: [{ name: "Vinayak Gore" }],
  creator: "Vinayak Gore",
  publisher: "Vinayak Gore",
  applicationName: "FingSprint",
  category: "productivity",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://fingsprint.vercel.app",
    siteName: "FingSprint",
    title: "FingSprint — Test and Improve Your Typing Speed",
    description:
      "Measure your typing speed in real time. Track words per minute, accuracy, and progress with FingSprint.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FingSprint — Test and Improve Your Typing Speed",
    description:
      "Measure your typing speed in real time. Track words per minute, accuracy, and progress with FingSprint.",
    creator: "@thevinayakgore",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
