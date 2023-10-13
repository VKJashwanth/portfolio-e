import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const aTag = <a href="https://jashwanthvk.vkjashwanth.repl.co"></a>

export const metadata: Metadata = {
  title: 'Sarvesh E',
  description: `Made by ${aTag}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
