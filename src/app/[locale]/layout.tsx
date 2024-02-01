import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import 'node_modules/animate.css/animate.min.css'
import { Toaster } from 'sonner'
import { NavBar } from '@/components/NavBar/NavBar'
import { FooterFB } from '@/components/Footer/Footer'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: 'Popa/Dev',
  description: 'Portafolio web - Emmanuel Popa',
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const t = useTranslations('Index');

  return (
    <html className='dark' lang={locale}>
      <body className={inter.className}>
        <Toaster richColors />
        <div className="bg-white dark:bg-slate-900 min-h-screen pt-3 relative pb-10">
          <div className="container mx-auto">
            <header>
              <NavBar>
                <Link href='/' className='a-element px-4 py-2'>{t('nav.routes.home')}</Link>
                <Link href='/about' className='a-element px-4 py-2'>{t('nav.routes.about')}</Link>
                <Link href='/projects' className='a-element px-4 py-2'>{t('nav.routes.projects')}</Link>
                <Link href='/contact' className='a-element px-4 py-2'>{t('nav.routes.contact')}</Link>
              </NavBar>
            </header>
            {children}
          </div>
          <FooterFB />
        </div>
      </body>
    </html>
  )
}