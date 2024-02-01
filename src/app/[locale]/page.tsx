
import { Education } from '@/components/Education'
import Image from 'next/image';
import myPic from '@/assets/epopa.png'
import { Credentials } from '@/components/Credentials/Credentials';
import { useTranslations } from 'next-intl';
import { Technologies } from '@/components/Technologies';
import { Quote } from '@/components/Quote';


export default function Home() {
  const header = useTranslations('Index.header');
  const timeline = useTranslations('Index.experience.timeline.freelace');
  const government = useTranslations('Index.experience.timeline.government');
  const talendig = useTranslations('Index.experience.timeline.talendig');

  const information = [
    {
      date: timeline('date'),
      company: timeline('company'),
      description: timeline('description'),
      link: timeline('link'),
      linkText: timeline('linkText')
    },
    {
      date: government('date'),
      company: government('company'),
      description: government('description'),
    },
    {
      date: talendig('date'),
      company: talendig('company'),
      description: talendig('description'),
    }
  ]

  return (
    <main className=" mt-24 md:mt-32 animate__animated animate__fadeIn">
      <section className="relative flex flex-col-reverse items-center gap-4">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-2xl md:text-5xl text-center mb-7">
            Emmanuel A. Popa Campusano
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-center mb-7">
            {header('headline')}

          </p>
          <a
            href='EmmanuelPopa-CV-EN.pdf'
            download='CV Emmanuel Popa'
            className="py-4 px-6 font-semibold 
            hover:text-white rounded-md border-2 hover:bg-blue-600  border-slate-400 text-slate-900  
            dark:border-blue-600 dark:text-white"
          >
            {header('button.text')}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={myPic}
            alt="Picture of the author"
            className='dark:shadow-slate-950 dark:shadow-lg rounded-full shadow-2xl'
            width={200}
            height={200}
          />
        </div>
      </section>

      <Education />
      <Credentials information={information} />
      <Quote />
      <Technologies />
    </main>
  )
}
