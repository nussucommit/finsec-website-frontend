import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Custom fonts
import { Biryani } from 'next/font/google'
import { Dosis } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const biryani = Biryani({
  subsets: ['latin'],
  weight: ['800']
})

export const dosis = Dosis({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'I love you Jason',
  description: 'NUSSU Finsec',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
