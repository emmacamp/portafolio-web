// import { Tooltip } from "flowbite-react";
import { Section } from "./Section"
import { reactLogo, gitLogo, mongodbLogo, nodeJSLogo, figmaLogo, viteLogo, typescriptLogo, tailwindLogo, bootstrapLogo, javascriptLogo, htmlLogo, cssLogo, sassLogo, githubLogo } from '@/assets/technologies'
import Image from "next/image";

interface TechIcons {
    src: string,
    alt: string,
    className: string,
    label: string
}

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
export const Technologies = () => {
  return (
      <Section title='Technologies'>
          <div className="logos flex flex-wrap justify-center">
              {technologiesIcons.map((icon, index) => (
                //   <Tooltip key={index} content={icon.label}>
                      <Image
                          key={index}
                          src={icon.src}
                          alt={icon.alt}
                          className={icon.className}
                          width={100}
                          height={100}
                      />
                  // </Tooltip> */}
              ))}
          </div>

      </Section>
  )
}
