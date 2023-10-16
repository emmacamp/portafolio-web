import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Landing } from '@/components/Landing/Landing'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import 'node_modules/animate.css/animate.min.css'

export const metadata = {
  title: 'Popa/Dev',
  description: 'Portafolio web de Emmanuel Popa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Landing>
          {children}
        </Landing>
      </body>
    </html>
  )
}
