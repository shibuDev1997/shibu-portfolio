import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Shibu.dev - Front-End Developer Portfolio",
    template: "%s | Shibu.dev",
  },
  description:
    "Front-End Developer with 2+ years of experience in React.js, Next.js, TypeScript, and modern web technologies. Creating exceptional digital experiences.",
  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "UI/UX Developer",
    "Web Developer",
    "Portfolio",
    "Shibu J",
  ],
  authors: [{ name: "Shibu J", url: "https://shibu.dev" }],
  creator: "Shibu J",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shibu.dev",
    title: "Shibu.dev - Front-End Developer Portfolio",
    description:
      "Front-End Developer with 2+ years of experience in React.js, Next.js, TypeScript, and modern web technologies.",
    siteName: "Shibu.dev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shibu.dev - Front-End Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shibu.dev - Front-End Developer Portfolio",
    description:
      "Front-End Developer with 2+ years of experience in React.js, Next.js, TypeScript, and modern web technologies.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
