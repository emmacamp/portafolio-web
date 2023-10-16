'use client'
import Link from 'next/link';
import { Dropdown, Navbar, Avatar, DarkThemeToggle } from 'flowbite-react';
import { LaguagueSVG } from '@/assets/LanguagueSVG';
import Image from 'next/image';
import './navbar.css';
import { toast } from 'sonner';
import { Tooltip } from 'flowbite-react';

export const NavBar = () => {

    if (typeof document !== 'undefined') {
        const listItems = document.querySelectorAll('.nav-links > ul > a') as NodeListOf<HTMLElement>;
        const backdrop = document.querySelector('#menu-backdrop')! as HTMLElement;

        listItems.forEach((item) => {
            // console.log(item);
            item.addEventListener('mouseenter', () => {
                const { left, top, width, height } = item.getBoundingClientRect();
                // console.log({ left, top, width, height });
                backdrop.style.setProperty('--left', `${left}px`);
                backdrop.style.setProperty('--top', `${top}px`);
                backdrop.style.setProperty('--width', `${width}px`);
                backdrop.style.setProperty('--height', `${height}px`);


                backdrop.style.opacity = '1';
                backdrop.style.visibility = 'visible';

            });

            item.addEventListener('mouseleave', () => {
                backdrop.style.opacity = '0';
                backdrop.style.visibility = 'hidden';

            });
        });

    }

    const handleLanguageClick = (): void => {
        toast.error('This feature is not available yet');
    }


    return (
        <>
            <div id="menu-backdrop" className='absolute bg-blue-100 dark:bg-slate-700 backdrop-blur-lg rounded 
            translate-x-[var(--left)] translate-y-[var(--top)] 
            left-0 top-0 w-[var(--width)] h-[var(--height)]
            transition-all duration-500 ease-in-out opacity-0 '
            ></div>

            <Navbar 
                fluid
                rounded
                className="bg-white  dark:bg-slate-800 container mx-auto text-gray-900 dark:text-gray-300"
            >
                <Link href='/' className='p-0 m-0'>
                    <span className="font-extrabold">POPA<span className="palo text-blue-600 mx-1" >/</span>DEV</span>
                </Link>
                <div className="flex md:order-2 dark:text-slate-100 ">

                    <Tooltip content="Toogle dark mode">
                        <DarkThemeToggle className='me-2 hover:bg-blue-100' />
                    </Tooltip>
                    <Dropdown
                        inline
                        arrowIcon={false}
                        label={
                            <Tooltip content="Change languages">
                                <Avatar alt="User settings" img={LaguagueSVG} rounded className='dark:hover:bg-gray-700 hover:bg-blue-100 py-2.5 rounded-lg border-gray-700 px-1' />
                            </Tooltip>
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm ">
                                Languages
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item className='gap-2' onClick={handleLanguageClick}>
                            <Image src='/usa.svg' alt='united state' width={20} height={20}></Image>
                            English
                        </Dropdown.Item>
                        <Dropdown.Item className='gap-2' onClick={handleLanguageClick}>
                            <Image src='/rep-dom.svg' alt='dominican republic' width={20} height={20}></Image>
                            Spanish
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse id='nav-links' className='nav-links dark:text-gray-300 relative [&>ul>a]:space-x-0 [&>ul>a]:text-center '>
                    <Link href='/' className='a-element px-4 py-2'>Home</Link>
                    <Link href='/#about' className='a-element px-4 py-2'>About</Link>
                    <Link href='/#project' className='a-element px-4 py-2'>Projects</Link>
                    <Link href='/contact' className='a-element px-4 py-2'>Contact</Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


