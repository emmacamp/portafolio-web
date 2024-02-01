
import { BackpackIcon, BrainIcon, BookIcon, SchoolIcon } from '@/assets'
import { Card } from '@/components/Card'

import './education.css'
import { useTranslations } from 'next-intl';

export const Education = () => {
    const t = useTranslations('Index');

    return (
        <section className='min-w-full  mt-24 md:mt-36 bg-blue-100 dark:bg-gray-700 sm:rounded-2xl pb-44 pt-32 '>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center p-3  rounded-sm dark:text-white">
                {t('education.title')}
            </h2>
            <CardSlider  />
        </section>
    )
}

interface Card {
    title: string;
    date: string;
    text: string;
}

const CardSlider = () => {
    const t = useTranslations('Index');
    const icons: any = {
        0: <BookIcon className=" text-white" />,
        1: <SchoolIcon className=" text-white" />,
        2: <BackpackIcon className=" text-white" />,
        3: <BrainIcon className=" text-white" />,

    }
    return (
        <div className="snap-x flex px-2 overflow-scroll snap-x-mandatory items-center gap-2 overflow-y-hidden scrollbar-hide">
            {/* <Card
                title={t('education.cards.0.title')}
                date={t('education.cards.0.date')}
                text={t('education.cards.0.text')}
                icon={icons[0] || <BookIcon className="text-white" />}
            />
            <Card
                title={t('education.cards.1.title')}
                date={t('education.cards.1.date')}
                text={t('education.cards.1.text')}
                icon={icons[1] || <SchoolIcon className="text-white" />}
            />
            <Card
                title={t('education.cards.2.title')}
                date={t('education.cards.2.date')}
                text={t('education.cards.2.text')}
                icon={icons[2] || <BackpackIcon className="text-white" />}
            />
            <Card
                title={t('education.cards.3.title')}
                date={t('education.cards.3.date')}
                text={t('education.cards.3.text')}
                icon={icons[3] || <BrainIcon className="text-white" />}
            /> */}


            {
                [1,2,3,4,5].map((card, index) => (
                    <Card
                        key={index}
                        title={t(`education.cards.${index}.title`)}
                        date={t(`education.cards.${index}.date`)}
                        text={t(`education.cards.${index}.text`)}
                        icon={icons[index] || <BookIcon className="text-white" />}
                    />
                ))
            }
        </div>
    )
}