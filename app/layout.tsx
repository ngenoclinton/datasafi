import type React from "react"
import "@/app/globals.css"

import { Inter } from "next/font/google"
import Navbar from "@/components/nav/navbar"
import Footer from "@/components/footer/Footer"
// import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pellets Data Analysts - Transform Your Data Into Strategic Business Assets",
  description: "We help businesses leverage their data to make informed decisions and gain competitive advantage.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
        <Navbar/>
          {children}
        <Footer/>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
