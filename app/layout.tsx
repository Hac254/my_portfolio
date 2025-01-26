import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Josh's Portfolio",
  description: "Cloud Engineer and Web Developer Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} font-sans bg-background`}>
        <main className="min-h-screen p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  )
}

