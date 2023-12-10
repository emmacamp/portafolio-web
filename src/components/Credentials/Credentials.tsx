'use client';

import { Section } from "../Section"
import { Button, Timeline } from 'flowbite-react';
import Link from "next/link";
import { HiCalendar } from 'react-icons/hi';

type Credentials = {
    date: string;
    company: string;
    description: string;
    link?: string;
    linkText?: string;
}


export const Credentials = () => {


    const information: Credentials[] = [
        {
            date: 'November 2022- Present',
            company: 'Freelance',
            description: 'Actually I am working as a Freelance, I have worked with different clients, developing web applications.',
            link: 'https://www.fiverr.com/emmacamp',
            linkText: 'See more'
        },
        {
            date: 'December 2022 - Present',
            company: 'Dirección General de Contrataciones Públicas',
            description: 'I am currently working as a Frontend Developer at the General Directorate of Public Procurement in the Dominican Republic.',
            // link: 'https://www.comprasdominicana.gov.do/',
            // linkText: 'See more'
        },
        {
            date: 'May 2022 - December 2020',
            company: 'Talendig',
            description: 'I worked as a Full Stack Developer at Talendig, a company that offers bootcamps to train people in the technology industry.'
        },
    ]


    return (
        <Section title='Work Experience' className='px-5 sm:px-0'>
            <Timeline>
                {
                    information.map(({ company, date, description, link, linkText }) => (
                        <Timeline.Item key={description}>
                            <Timeline.Point icon={HiCalendar} />
                            <Timeline.Content>
                                <Timeline.Time>
                                    {date}
                                </Timeline.Time>
                                <Timeline.Title>
                                    {company}
                                </Timeline.Title>
                                <Timeline.Body>
                                    <p>
                                        {description}
                                    </p>
                                </Timeline.Body>
                                {
                                    link && (
                                        <Link href={link} target="_blank" rel="noopener noreferrer">
                                            <Button color="gray">
                                                <p>
                                                </p>
                                                    {linkText}
                                            </Button>
                                        </Link>
                                    )
                                }
                            </Timeline.Content>
                        </Timeline.Item>
                    ))
                }
            </Timeline>
        </Section>


    )
}
