import "@/app/globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import FloatingNavbar from "@/components/navbar"
import { siteDescription, siteTitle } from "@/config"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  applicationName: siteTitle,
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteTitle,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto max-w-5xl px-4 py-20 antialiased md:px-6`}
      >
        <ThemeProvider>
          {children}
          <FloatingNavbar />
        </ThemeProvider>
      </body>
    </html>
  )
}
