'use client'
import { BackpackIcon, BrainIcon, BookIcon, SchoolIcon } from '@/assets'
import { Card } from '@/components/Card'

import './education.css'
import { useLanguage } from '@/Languages/languageStorage';

export const Education = () => {

    const { language: { education } } = useLanguage();

    const icons: any = {
        0: <BookIcon className=" text-white" />,
        1: <SchoolIcon className=" text-white" />,
        2: <BackpackIcon className=" text-white" />,
        3: <BrainIcon className=" text-white" />,

    }
    // items-center card-slider 
    // scroll-snap-type-x: mandatory
    // scroll-snap-points-x: repeat(100%)
    // scroll-snap-type-y: mandatory
    // scroll-snap-points-y: repeat(100%)
    // overflow-x-scroll
    // overflow-y-hidden
    // scrollbar-hide
    // w-full

    return (
        <section className='min-w-full  mt-24 md:mt-36 bg-blue-100 dark:bg-gray-700 sm:rounded-2xl pb-44 pt-32 '>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center p-3  rounded-sm dark:text-white">
                {education.title}
            </h2>
            <div className="snap-x flex px-2 overflow-scroll snap-x-mandatory items-center gap-2 overflow-y-hidden scrollbar-hide">
                {
                    education.cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            date={card.date}
                            text={card.text}
                            icon={icons[index] || <BookIcon className="text-white" />}
                        />
                    ))
                }
            </div>
        </section>
    )
}

