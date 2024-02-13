import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Custom fonts
import { Biryani } from 'next/font/google'
import { Dosis } from 'next/font/google'
import { Poppins } from 'next/font/google'

import './globals.css'
import Login from './login/page'

const inter = Inter({ subsets: ['latin'] })

export const biryani = Biryani({
  subsets: ['latin'],
  weight: ['800']
})

export const dosis = Dosis({
  subsets: ['latin']
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>I love you Jason</title>
        <meta name='description' content='NUSSU Finsec' />
      </head>
      <body className={inter.className}>
        
        {children}
      </body>
    </html>
  )
}
