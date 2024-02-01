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


export const Credentials = ({ information }: { information: Credentials[] }) => {


    return (
        <Section title='Work Experience' className='px-5 sm:px-0'>
            <Timeline>
                {
                    information?.map(({ company, date, description, link, linkText }) => (
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
