'use client';
import Link from 'next/link';
import { Dropdown, Navbar, Avatar, DarkThemeToggle } from 'flowbite-react';
import { LaguagueSVG } from '@/assets/LanguagueSVG';
import Image from 'next/image';

export const NavBar = () => {

    return (
        <Navbar
            fluid
            rounded
            className="bg-white dark:bg-slate-800 container mx-auto text-gray-900 dark:text-gray-300"
        >
            <Link href='/'>
                {/* <span className="self-center whitespace-nowrap text-xl font-semibold  text-gray-900 dark:text-gray-300">
                    POPA/DEV
                </span> */}
                <span className="font-extrabold">POPA<span className="palo text-blue-600 mx-1" >/</span>DEV</span>

            </Link>
            {/* </Navbar.Brand> */}
            <div className="flex md:order-2 dark:text-slate-100 ">
                <DarkThemeToggle className='me-2'/>
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
                       <Image src='/usa.svg' alt='united state' className='' width={20} height={20}></Image> 
                       English  
                    </Dropdown.Item>
                    <Dropdown.Item className='gap-2'>
                       <Image src='/rep-dom.svg' alt='dominican republic' className='' width={20} height={20}></Image> 
                        Spanish
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='dark:text-gray-300'>
                <Link href='/'>Home</Link>
                <Link href='/servicios'>Servicios</Link>
                <Link href='/servicios/facturas'>Facturas</Link>
                <Link href='/servicios/disminuciones'>Disminuciones</Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


