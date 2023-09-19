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

    return (
        <section className='items-center mt-24 md:mt-36'>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{education.title}</h2>
            <div className="flex gap-3 flex-wrap justify-center">
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

