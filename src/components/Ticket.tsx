'use client';

import 'atropos/css';
import Atropos from 'atropos/react';
import { BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiVite, SiVisualstudiocode } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import Image from 'next/image';



const BackgroundPattern = () => (
    <svg
        id="patternId"
        width="200%"
        height="200%"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <pattern id="a" patternUnits="userSpaceOnUse" width="180" height="45">
                <path
                    d="m0 5.625 14.06 7.03 16.876-8.438L22.502 0H11.25l8.436 4.219-5.623 2.81L0 0ZM33.75 0l2.81 1.406L39.374 0Zm16.871 0h.002L19.686 15.469l16.877 8.44 30.939-15.47 5.625 2.811-30.94 15.47 16.875 8.438 14.063-7.031 5.623 2.812L50.621 45h11.25l28.131-14.063L73.126 22.5l-14.065 7.033-5.623-2.812L84.374 11.25 67.498 2.81 36.561 18.282l-5.625-2.814L61.87 0H50.62Zm22.505 0L90 8.437l14.06-7.03 5.626 2.812-30.938 15.469 16.874 8.438 30.939-15.472 5.625 2.815L73.126 45h11.25l59.061-29.532L126.56 7.03 95.622 22.499l-5.621-2.814 30.934-15.467L112.498 0H95.621l-5.623 2.813L84.376 0Zm50.624 0h-.002l44.998 22.5-5.623 2.813-14.063-7.032-16.876 8.44 30.941 15.468-2.813 1.407L157.499 45h11.249l5.628-2.813-30.938-15.468 5.624-2.813 14.064 7.033L180 22.501 134.998 0Zm33.749 45L126.56 29.532l-16.877 8.439L123.749 45h11.249l-14.062-7.03 5.625-2.812L146.248 45ZM146.248 0l11.25 5.625L168.748 0Zm16.875 8.44L180 16.877V11.25l-5.625-2.815L180 5.625V0ZM0 11.25v5.627l42.186 21.092-5.625 2.814-30.938-15.47L0 28.122v5.629l5.623-2.813L33.75 45h5.624l14.062-7.031zm0 22.502v5.625L11.251 45h11.251zm180-5.631v.002l-11.252 5.627L180 39.377Zm-75.939 12.662L95.621 45h16.877z"
                    strokeWidth="1"
                    stroke="none"
                    fill="rgba(255, 255, 255, .1)"
                />
            </pattern>
        </defs>
        <rect
            width="800%"
            height="800%"
            transform="translate(0,0)"
            fill="url(#a)"
        />
    </svg>
);

interface TicketProps {
    transition?: boolean;
    number?: number;
    flavor: any;
    user?: any;
}

export default function Ticket({ transition, number, flavor, user }: TicketProps) {
    const { username, avatar, name } = user ?? {};

    return (
        <div className="relative z-[1000] w-full h-auto mx-auto aspect-video">
            <div className="h-full opacity-100 isolate aspect-video">
                <div className="h-full sm:px-12">
                    <Atropos
                        id="ticket"
                        className="block w-full h-auto mx-auto bg-blue-900 dark:bg-blue-800  shadow-2xl aspect-video rounded-2xl [box-sizing:border-box]"
                    >
                        <div
                            className={`block h-full overflow-hidden opacity-100 rounded-2xl ${transition && 'transition duration-500 ease-in-out'
                                } ${flavor.colors.ticket}`}
                        >
                            <div className="relative flex flex-col items-center h-full overflow-hidden">
                                <div className="absolute inset-0 flex items-start justify-center -z-50 ">
                                    <div className="h-full w-full [mask-image:linear-gradient(black_10%,transparent)]">
                                        {/* <BackgroundPattern /> */}
                                    </div>
                                </div>

                            </div> 

                            <div className="absolute items-center p-4 overflow-hidden font-mono text-white z-[1000] md:p-6 left-20 bottom-2 opacity-100 hidden md:block">
                                <span className="block mb-4 text-xs text-left uppercase text-zinc-300">
                                    Most used:
                                </span>
                                <div className="flex flex-row items-center gap-x-6">
                                    {/* <Codely className='h-auto w-36' />
									<DonDominio className='h-auto w-36' />
									<Malt className='w-24 h-auto' />
									<LemonCode className='h-auto w-28' /> */}
                                    {/* <svg className='h-auto w-10 fill-[#fff]' height="1em" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" /></svg> */}
                                    <BiLogoReact className='h-auto w-10 fill-[#fff]' />
                                    <BiLogoTailwindCss className='h-auto w-10 fill-[#fff]' />
                                    <RiJavascriptFill className='h-auto w-10 fill-[#fff]' />
                                    <BiLogoTypescript className='h-auto w-10 fill-[#fff]' />
                                    <SiVite className='h-auto w-10 fill-[#fff]' />
                                    <SiVisualstudiocode className='h-auto w-10 fill-[#fff]' />
                                    <BsGithub className='h-auto w-10 fill-[#fff]' />

                                </div>
                            </div>

                            <div
                                className={
                                    'absolute z-10 overflow-hidden opacity-30 -right-8 -bottom-10 h-full rounded-r-2xl flex items-end'
                                }
                            >
                                <figure
                                    className={`${flavor.figure} w-48 h-48 md:w-96 md:h-96 -rotate-6 p-8 -z-10`}
                                >
                                    {/* <flavor.component className="w-full h-auto" /> */}
                                </figure>
                            </div>

                            <div
                                className={`${transition && 'transition duration-500 ease-in-out' 
                                    } absolute inset-0 flex items-start justify-center z-20 left-0 right-0 w-full h-full border md:border-[6px] ${flavor.colors.border
                                    } rounded-2xl`}
                            ></div>

                            {avatar && (
                                <div className="absolute z-50 flex flex-col items-center justify-center p-4 overflow-hidden font-mono text-white md:p-6 right-2 top-2 gap-y-2">
                                    <Image
                                        crossOrigin="anonymous"
                                        className="block w-10 h-10 rounded-full md:w-20 md:h-20"
                                        src={avatar}
                                        alt={`Avatar de ${username}`}
                                    />
                                    <h3 className={`text-sm font-bold ${flavor.colors.text}`}>
                                        {username ?? name}
                                    </h3>
                                </div>
                            )}

                            {/* <div className="absolute z-50 items-center p-4 overflow-hidden font-mono text-white md:p-6 left-2 bottom-2">
                                <div className="z-50 flex flex-col gap-0 leading-none text-shadow-xl">
                                    <span
                                        className={`text-xs sm:text-[23px] leading-none font-black ${flavor.colors.month}`}
                                    >
                                        SEP
                                    </span>
                                    <span className="text-xl font-bold leading-none text-white sm:text-4xl">
                                        13
                                    </span>
                                    <span
                                        className={`text-xs sm:text-[22px] leading-none ${flavor.colors.time}`}
                                    >
                                        6PM
                                    </span>
                                </div>
                            </div> */}
                        </div>
                    </Atropos>
                </div>
            </div>
        </div>
    );
}
