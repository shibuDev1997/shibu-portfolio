import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shibu J - Front-End Developer",
  description:
    "Professional portfolio of Shibu J, a passionate Front-End Developer with 3+ years of experience specializing in React.js, Next.js, and modern web technologies.",
  keywords: ["frontend developer", "react", "nextjs", "typescript", "portfolio", "shibu"],
  authors: [{ name: "Shibu J" }],
  openGraph: {
    title: "Shibu J - Front-End Developer",
    description: "Professional portfolio showcasing my work and experience in React.js and Next.js development",
    url: "https://shibuj.dev",
    siteName: "Shibu J Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shibu J - Front-End Developer",
    description: "Professional portfolio showcasing my work and experience in React.js and Next.js development",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
