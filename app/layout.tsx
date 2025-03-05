import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import Script from "next/script"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: "Joshua Wafula | Cloud Engineer & Web Developer",
  description:
    "Portfolio of Joshua Wafula, a certified IT Personnel, Cloud Practitioner, Web Developer, and App Developer based in Kenya. View my projects, skills, and experience.",
  keywords: [
    "Joshua Wafula",
    "Wafula Joshua",
    "Cloud Engineer",
    "Web Developer",
    "Kenya Developer",
    "App Developer",
    "UI/UX Designer",
    "Photography",
  ],
  authors: [{ name: "Joshua Wafula" }],
  creator: "Joshua Wafula",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wafula-josh.vercel.app/",
    title: "Joshua Wafula | Cloud Engineer & Web Developer",
    description:
      "Portfolio of Joshua Wafula, a certified IT Personnel, Cloud Practitioner, Web Developer, and App Developer based in Kenya.",
    siteName: "Joshua Wafula Portfolio",
    images: [
      {
        url: "https://wafula-josh.vercel.app/og-image.png", // Create this image and replace with actual path
        width: 1200,
        height: 630,
        alt: "Joshua Wafula Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Wafula | Cloud Engineer & Web Developer",
    description:
      "Portfolio of Joshua Wafula, a certified IT Personnel, Cloud Practitioner, Web Developer, and App Developer based in Kenya.",
    images: ["https://wafula-josh.vercel.app/og-image.png"], // Same as OG image
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head><Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-48THCFH2Z7`} // Replace with your actual measurement ID
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-48THCFH2Z7'); // Replace with your actual measurement ID
            `,
          }}
        /></head>
      <body className={poppins.variable}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ThemeToggle />
          <main className="min-h-screen p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

