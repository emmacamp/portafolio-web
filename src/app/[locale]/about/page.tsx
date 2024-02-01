import Image from 'next/image'
import myImage from '@/assets/epopa.png'

export const About = () => {

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
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">About Me</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Emmanuel Aaron Popa Campusano
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mt-4 ">
        
          <div className="photo mx-auto ">
            <Image src={myImage} alt="Emmanuel Popa" width='300' height='300' className=' rounded-full animate__animated animate__backInLeft' />
          </div>
          <div className="description text-slate-600 dark:text-slate-300">
            <p>
              Hello! I am <strong>Emmanuel Popa</strong>, a passionate software developer, {myAge()} years old, with an insatiable thirst for knowledge. Currently, I&apos;m immersed in my education at the Instituto Tecnológico de las Américas, where I am acquiring the skills and knowledge needed to excel in the world of technology. But my learning doesn&apos;t stop in the classroom; I am a avid self-learner, always seeking opportunities to learn more and push boundaries.
            </p>
          </div>
        
        </div>

        <div className="p mt-5 text-slate-600 dark:text-slate-300">
          <p>
            However, my learning doesn&apos;t end in the classroom; I am a keen autodidact, always seeking opportunities to learn more and push boundaries. In addition to my education and work at the Dirección General de Contrataciones Públicas since December 2022, I am also a passionate freelancer and software developer. Working independently allows me to apply my skills and knowledge to a variety of exciting projects, and I enjoy collaborating with different clients and companies to deliver customized technological solutions.
          </p>
          <br />
          <p>
            Technology is my true passion, and my mission is to use my skills as a software developer to create innovative solutions that improve people&apos;s lives.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About
