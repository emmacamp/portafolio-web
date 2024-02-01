import Image from "next/image"
import { Section } from "./Section"

export const Quote = () => {
  return (
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
  )
}
