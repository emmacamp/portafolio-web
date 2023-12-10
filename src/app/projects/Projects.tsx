'use client';
import { BookIcon } from "@/assets";
import { figmaLogo, githubLogo } from "@/assets/technologies";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Modal as FBModal } from 'flowbite-react';


export const Projects = () => {
    const [openModal, setOpenModal] = useState();

    // const technologiesIcons: TechIcons[] = [
    //     {
    //         src: githubLogo,
    //         alt: 'Github Logo',
    //         className: 'logo-card github',
    //         label: 'Github',
    //     },
    //     {
    //         src: figmaLogo,
    //         alt: 'Figma Logo',
    //         className: 'logo-card figma',
    //         label: 'Figma',
    //         url: 'https://www.figma.com/file/sGesHisRiJ7sDGm4VTV4fj/TurnoTech?type=design&mode=design&t=qdLjQJXZZ2zz2uLA-1'
    //     },
    // ];

    const proyects = [
        {
            private: true,
            name: 'TurnoTech',
            date: '2021-09-01',
            icon: <BookIcon className=" text-white" />,
            description: 'TurnoTech is a web application specialized in managing shifts during business rounds that take place between purchasing units and state suppliers. Designed to optimize the planning and coordination of these events, TurnoTech simplifies the assignment of shifts, communication between stakeholders and the collection of data related to business meetings. The application is intended to facilitate and improve the negotiation and collaboration process between the public sector and suppliers.',
            technologies: ['React', 'Bootstrap', 'Figma', '.NET', 'SQL Server', 'IIS', 'C#'],
            url: 'https://turnotech.vercel.app/',
            technologiesIcons: [
                {
                    src: figmaLogo,
                    alt: 'Figma Logo',
                    className: 'logo-card figma',
                    label: 'Figma',
                    url: 'https://www.figma.com/file/sGesHisRiJ7sDGm4VTV4fj/TurnoTech?type=design&mode=design&t=qdLjQJXZZ2zz2uLA-1'
                }
            ]
        },
        {
            private: false,
            name: 'Moflix',
            date: '2023-09-20',
            icon: <BookIcon className=" text-white" />,
            description: 'Movie and series trailer website, with a minimalist design and a very intuitive interface. It has a search engine that allows you to find the content you want to see, as well as a section where you can see the most popular content of the moment. The application is designed to be responsive, so it can be used on any device.',
            technologies: ['React', 'SASS', '.NET', 'SQL Server', 'C#'],
            url: '',
            technologiesIcons: [
                {
                    src: figmaLogo,
                    alt: 'Figma Logo',
                    className: 'logo-card figma',
                    label: 'Figma',
                    // url: 'https://www.figma.com/file/sGesHisRiJ7sDGm4VTV4fj/TurnoTech?type=design&mode=design&t=qdLjQJXZZ2zz2uLA-1'
                },
                {
                    src: githubLogo,
                    alt: 'Github Logo',
                    className: 'logo-card github',
                    label: 'Github',
                    url: 'https://github.com/emmacamp/Moflix'
                }
            ]
        },
    ]


    const handleModal = () => {
        setOpenModal(undefined)
    }




    return (
        <>
            <section className="bg-white dark:bg-gray-900  animate__animated animate__fadeIn" onClick={handleModal}>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">My Projects</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        My projects are the best way to get to know me, but if you want to contact me, you can do so through the following form.
                    </p>
                    <div className="proyects flex flex-wrap justify-center">
                        {
                            proyects.map((proyect, index) => (
                                <div key={index} onClick={handleModal} className={"relative cursor-pointer snap-center w-[280px] card-component bg-white dark:bg-slate-800 rounded-lg px-6 py-5 my-2  ring-1 ring-slate-900/5 shadow-xl sm:mx-2"}>
                                    <div className="flex h-14  justify-between items-start gap-2 mb-5">
                                        <div className="flex gap-2">
                                            <span className="inline-flex items-center justify-center p-2 bg-blue-600 dark:bg-blue-800 text-white rounded-md shadow-lg">
                                                {proyect.icon}
                                            </span>
                                            <div className="">
                                                <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
                                                    {proyect.name}
                                                </h3>
                                                <small className="text-slate-400  dark:text-blue-500 relative bottom-1 italic">{proyect.date}</small>
                                            </div>
                                        </div>
                                        {
                                            proyect.private
                                                ? <span className="bagde-private bg-red-200 border-red-700 border-[.5px] text-red-700 px-2 py-1 rounded-xl text-xs">Private</span>
                                                : <span className="bagde-private bg-green-200 border-green-700 border-[.5px] text-green-700 px-2 py-1 rounded-xl text-xs">Public</span>
                                        }
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                                        {String(proyect.description).length > 100 ? String(proyect.description).substring(0, 90) + '...' : proyect.description}
                                    </p>
                                    <div className="body flex flex-col justify-between">

                                        <div className="tech flex flex-wrap justify-center gap-2 mt-5">
                                            {
                                                proyect.technologies.map((tech, index) => (
                                                    <span key={index} className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded-md">{tech}</span>
                                                ))
                                            }
                                        </div>
                                        <div className="flex justify-between items-center mt-5 ">
                                            {/* <Link href={`${proyect.private ? '' : proyect.url}`}> */}
                                            <button onClick={handleModal} className={` bg-blue-600 dark:bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-500 dark:hover:bg-blue-700 transition duration-300 ease-in-out `}>
                                                View More
                                            </button>
                                            {/* </Link> */}
                                            {/* <Link href={`${proyect.private ? '' : proyect.url}`}>
                                                <button disabled={proyect.private} className={`${proyect.private ? 'bg-blue-500' : ''} bg-blue-600 dark:bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-500 dark:hover:bg-blue-700 transition duration-300 ease-in-out `}>
                                                    View Project
                                                </button>
                                            </Link> */}
                                            <div className="flex gap-2 flex-row-reverse">

                                                {
                                                    proyect.technologiesIcons.map((icon, index) => (
                                                        icon.url ?
                                                            <Link href={icon?.url} target="_blank" key={index}>
                                                                <Image
                                                                    key={index}
                                                                    src={icon.src}
                                                                    alt={icon.alt}
                                                                    className={icon.className + ' '}
                                                                    width={30}
                                                                    height={30}
                                                                />
                                                            </Link>
                                                            : null
                                                    ))
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <FBModal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
                <FBModal.Header>title</FBModal.Header>
                <FBModal.Body>
                    body
                </FBModal.Body>
                <FBModal.Footer className="flex justify-end">
                    <Button color='red' onClick={() => setOpenModal(undefined)}>Cerrar</Button>
                </FBModal.Footer>
            </FBModal>
        </>
    )
}




/*  <div className={` relative snap-center h-96 w-96 card-component bg-white dark:bg-slate-800 rounded-lg px-6 py-8 sm:py-10 ring-1 ring-slate-900/5 shadow-xl sm:w-64  sm:mt-10 sm:mx-2`}>
                        {
                            proyects.map((proyect, index) => (
                                <>
                                    <div key={index} className="flex items-end gap-2 mb-5">
                                        <span className="inline-flex items-center justify-center p-2 bg-blue-600 dark:bg-blue-800 text-white rounded-md shadow-lg">
                                            {proyect.icon}
                                        </span>
                                        <div>
                                            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                                                {proyect.name}
                                            </h3>
                                            <small className="text-slate-400  dark:text-blue-500 relative bottom-1 italic">{proyect.date}</small>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm overflow-hidden   ">
                                        {String(proyect.description).length > 100 ? String(proyect.description).substring(0, 100) + '...' : proyect.description}
                                    </p>
                                    <div className="tech">
                                        <div className="flex flex-wrap justify-center gap-2 mt-5">
                                            {
                                                proyect.technologies.map((tech, index) => (
                                                    <span key={index} className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded-md">{tech}</span>
                                                ))
                                            }
                                        </div>
                                        <div className="flex justify-center mt-5">
                                            <Link href={proyect.url}>
                                                <button className="bg-blue-600 dark:bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-500 dark:hover:bg-blue-700 transition duration-300 ease-in-out">
                                                    View Project
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex absolute right-0 bottom-0 me-6 mb-3 gap-3">
                                        {
                                            technologiesIcons.map((icon, index) => (
                                                icon.url ?
                                                    <Link href={icon?.url} target="_blank" key={index}>
                                                        <Image
                                                            key={index}
                                                            src={icon.src}
                                                            alt={icon.alt}
                                                            className={icon.className + ' '}
                                                            width={30}
                                                            height={30}
                                                        />
                                                    </Link>
                                                    : null
                                            ))}
                                    </div>
                                </>
                            ))
                        }
                    </div> */