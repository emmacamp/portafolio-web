'use client'
import { NavBar } from '@/components/NavBar/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Flowbite } from 'flowbite-react'
import { FooterFB } from '@/components/Footer/Footer'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Popa/Dev',
  description: 'Portafolio web de Emmanuel Popa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <Toaster richColors />
        <Flowbite>
          <div className="bg-white dark:bg-slate-900 min-h-screen pt-3">
            <div className="container mx-auto">
              <header>
                <NavBar />
              </header>
              {children}
            </div>
            <FooterFB />
          </div>
        </Flowbite>
      </body>
    </html>
  )
}
