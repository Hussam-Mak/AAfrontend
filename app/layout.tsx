"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "./components/navbar"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AnimatePresence mode="wait">
          <div key={pathname}>{children}</div>
        </AnimatePresence>
      </body>
    </html>
  )
}
