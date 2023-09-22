'use client'
import React from 'react'
import { NavBar } from '@/components/NavBar/NavBar'
import { Flowbite } from 'flowbite-react'
import { FooterFB } from '@/components/Footer/Footer'
import { Toaster } from 'sonner'

export const Landing = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <Flowbite>
            <Toaster richColors />
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
    )
}
