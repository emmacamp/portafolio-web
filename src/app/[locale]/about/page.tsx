import Image from 'next/image'
import myImage from '@/assets/epopa.png'
import { useTranslations } from 'next-intl'

export const About = () => {
  const about = useTranslations('Index.about')

  const myAge = () => {
    const today = new Date()
    const birthDate = new Date('2003-03-30')

    let age = today.getFullYear() - birthDate.getFullYear()

    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <section className="bg-white dark:bg-gray-900  animate__animated animate__fadeIn">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          {about('about.title')}
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Emmanuel Aaron Popa Campusano
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mt-4 ">

          <div className="photo mx-auto ">
            <Image src={myImage} alt="Emmanuel Popa" width='300' height='300' className=' rounded-full animate__animated animate__backInLeft' />
          </div>
          <div className="description text-slate-600 dark:text-slate-300">
            <p>
              {about('greetings')} <strong>Emmanuel Popa</strong>, {about('age')} {myAge()} {about('years')}
            </p>
          </div>
        </div>

        <div className="p mt-5 text-slate-600 dark:text-slate-300">
          <p>
            {about('learning')}
          </p>
          <br />
          <p>
            {about('mission')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
