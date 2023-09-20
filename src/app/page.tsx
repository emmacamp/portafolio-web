'use client';

import { useLanguage } from '@/Languages/languageStorage'
import { Contact } from '@/components/Contact';
import { Education } from '@/components/Education'
import Image from 'next/image';
import myPic from '../assets/epopa.png'

export default function Home() {
  const { language: { header } } = useLanguage()
  return (
    <main className=" mt-24 md:mt-32">
      <section className="relative flex flex-col-reverse items-center gap-4">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-2xl md:text-5xl text-center mb-7">
            {header.quote.text}
            <br />
            <span className="text-blue-600 text-center">
              {header.quote.textBlue}
            </span>
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-center mb-7">
            {header.quote.author}
          </p>
          <a
            href='EmmanuelPopa-CV-EN.pdf'
            download='CV Emmanuel Popa'
            className="py-4 px-6 font-semibold 
            hover:text-white rounded-md border-2 hover:bg-blue-600  border-slate-400 text-slate-900  
            dark:border-blue-600 dark:text-white"
          >
            {header.button.text}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={myPic}
            alt="Picture of the author"
            className='dark:shadow-slate-950 dark:shadow-lg rounded-full shadow-2xl  '
            width={200}
            height={200}
          />
        </div>
      </section>
      <Education />
      <Contact />
    </main>
  )
}
