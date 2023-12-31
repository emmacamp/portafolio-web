'use client';

import { useLanguage } from '@/Languages/languageStorage'
import { Education } from '@/components/Education'
import Image from 'next/image';
import myPic from '../assets/epopa.png'
import { Section } from '@/components/Section';
import Ticket from '@/components/Ticket';
import { FLAVORS } from '@/flavors/data'
import { useState } from 'react';
import { Credentials } from '@/components/Credentials/Credentials';
import { reactLogo, gitLogo, mongodbLogo, nodeJSLogo, figmaLogo, viteLogo, typescriptLogo, tailwindLogo, bootstrapLogo, javascriptLogo, htmlLogo, cssLogo, sassLogo, githubLogo } from '@/assets/technologies'
import { Tooltip } from 'flowbite-react';

interface TechIcons {
  src: string,
  alt: string,
  className: string,
  label: string
}

export default function Home({ initialFlavor }: { initialFlavor: string }) {
  const { language: { header } } = useLanguage();


  // const [flavor, setFlavor] = useState(FLAVORS.javascript)
  // const [number, setNumber] = useState(10)
  // const [username, setUsername] = useState('emmacamp')


  const technologiesIcons: TechIcons[] = [
    {
      src: reactLogo,
      alt: 'React Logo',
      className: 'logo react',
      label: 'React JS'
    },
    {
      src: javascriptLogo,
      alt: 'Javascript Logo',
      className: 'logo javascript',
      label: 'Javascript'
    },
    {
      src: typescriptLogo,
      alt: 'Typescript Logo',
      className: 'logo typescript',
      label: 'Typescript'
    },
    {
      src: nodeJSLogo,
      alt: 'Node js Logo',
      className: 'logo nodejs',
      label: 'Node JS'
    },
    {
      src: githubLogo,
      alt: 'Github Logo',
      className: 'logo github',
      label: 'Github'
    },
    {
      src: gitLogo,
      alt: 'Git Logo',
      className: 'logo git',
      label: 'Git'
    },
    {
      src: mongodbLogo,
      alt: 'Mongo DB Logo',
      className: 'logo mongodb',
      label: 'Mongo DB'
    },
    {
      src: viteLogo,
      alt: 'Vite Logo',
      className: 'logo vite',
      label: 'Vite JS'
    },
    {
      src: tailwindLogo,
      alt: 'Tailwindcss Logo',
      className: 'logo tailwind',
      label: 'Tailwind CSS'
    },
    {
      src: bootstrapLogo,
      alt: 'Bootstrap Logo',
      className: 'logo bootstrap',
      label: 'Bootstrap'
    },
    {
      src: htmlLogo,
      alt: 'Html Logo',
      className: 'logo html',
      label: 'HTML5'
    },
    {
      src: cssLogo,
      alt: 'Css Logo',
      className: 'logo css',
      label: 'CSS3'
    },
    {
      src: sassLogo,
      alt: 'Sass Logo',
      className: 'logo sass',
      label: 'SASS'
    },
    {
      src: figmaLogo,
      alt: 'Figma Logo',
      className: 'logo figma',
      label: 'Figma'
    },
  ];

  return (
    <main className=" mt-24 md:mt-32 animate__animated animate__fadeIn">
      <section className="relative flex flex-col-reverse items-center gap-4">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-2xl md:text-5xl text-center mb-7">
            {/* {header.quote.text} */}
            Emmanuel A. Popa Campusano
            <br />
            <span className="text-blue-600 text-center">
              {/* {header.quote.textBlue} */}
              {/* Sofware Developer */}
            </span>
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-center mb-7">
            {/* {header.quote.author} */}
            Sofware Developer
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
            className='dark:shadow-slate-950 dark:shadow-lg rounded-full shadow-2xl'
            width={200}
            height={200}
          />
        </div>
      </section>
      
      <Education />

      <Credentials />

      <Section title='Quote'>
        <figure className="max-w-screen-md mx-auto text-center rounded-lg  py-5 border-2 border-slate-500">
          <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-xl italic font-medium  mb-8 lg:mb-16 text-center text-gray-500 dark:text-gray-300 sm:text-xl">
              &ldquo;First solve the problem. Then, write the code.&rdquo;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <Image
              width={250}
              height={250}
              className="w-6 h-6 rounded-full"
              src="/John_Johnson.jpg"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-gray-900 dark:text-white">John Johnson</cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Programmer</cite>
            </div>
          </figcaption>
        </figure>
      </Section>
      <Section title='Technologies'>
        <div className="logos flex flex-wrap justify-center">
          {technologiesIcons.map((icon, index) => (
            <Tooltip key={index} content={icon.label}>
            <Image
              key={index}
              src={icon.src}
              alt={icon.alt}
              className={icon.className}
              width={100}
              height={100}
            />
            </Tooltip>
          ))}
        </div>

      </Section>

      {/* <Section title='Github Card'>
        <div className='flex items-center justify-center max-w-5xl mx-auto mt-10 flex-0'>
          <Ticket
            transition={!initialFlavor}
            number={number}
            flavor={flavor}
            user={{
              avatar: username ? `https://unavatar.io/github/${username}` : null,
              username
            }}
          />
        </div>
      </Section> */}
    </main>
  )
}
