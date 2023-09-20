'use client'
import Link from 'next/link';
import { Dropdown, Navbar, Avatar, DarkThemeToggle } from 'flowbite-react';
import { LaguagueSVG } from '@/assets/LanguagueSVG';
import Image from 'next/image';
import './navbar.css'
import { use, useEffect, useRef, useState } from 'react';
import { Inter } from 'next/font/google';





export const NavBar = () => {

    const listItems = document.querySelectorAll('#nav-links > ul a') as NodeListOf<HTMLElement>;
    const backdrop = document.querySelector('#menu-backdrop')! as HTMLElement;

    listItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            const { left, top, width, height } = item.getBoundingClientRect();
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




    return (
        <>
            <div id="menu-backdrop" className='absolute bg-black/5 backdrop-blur-lg rounded 
            translate-x-[var(--left)] translate-y-[var(--top)] 
            left-0 top-0 w-[var(--width)] h-[var(--height)]
            transition-all duration-500 ease-in-out opacity-0'
            />


            <Navbar
                fluid
                rounded
                className="bg-white dark:bg-slate-800 container mx-auto text-gray-900 dark:text-gray-300"
            >
                <Link href='/'>
                    <span className="font-extrabold">POPA<span className="palo text-blue-600 mx-1" >/</span>DEV</span>
                </Link>
                <div className="flex md:order-2 dark:text-slate-100 ">
                    <DarkThemeToggle className='me-2' />
                    <Dropdown
                        inline
                        arrowIcon={false}
                        label={<Avatar alt="User settings" img={LaguagueSVG} rounded />}
                        className=""
                    >
                        <Dropdown.Header>
                            <span className="block text-sm ">
                                Languages
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item className='gap-2'>
                            <Image src='/usa.svg' alt='united state' width={20} height={20}></Image>
                            English
                        </Dropdown.Item>
                        <Dropdown.Item className='gap-2'>
                            <Image src='/rep-dom.svg' alt='dominican republic' width={20} height={20}></Image>
                            Spanish
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse id='nav-links' className='nav-links dark:text-gray-300 relative [&>ul>a]:space-x-0 [&>ul>a]:text-center '>
                    <Link href='/' className='a-element px-4 py-2'>Home</Link>
                    <Link href='#about' className='a-element px-4 py-2'>About</Link>
                    <Link href='#proyects' className='a-element px-4 py-2'>Projects</Link>
                    <Link href='#contact' className='a-element px-4 py-2'>Contact</Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

