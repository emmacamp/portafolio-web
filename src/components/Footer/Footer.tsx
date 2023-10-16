'use client';

import { Footer } from 'flowbite-react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

export const FooterFB = () => {
    return (
        <Footer container className='mt-5 rounded-none'>
            <div className="w-full">
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        by="Emmanuel Aaron Popa Campusano"
                        href=""
                        year={new Date().getFullYear()}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="https://www.linkedin.com/in/emmananuel-popa/"
                            target='_blank'
                            icon={BsLinkedin}
                        />
                        <Footer.Icon
                            href="https://github.com/emmacamp"
                            target='_blank'
                            icon={BsGithub}
                        />
                        <Footer.Icon
                            href="https://www.instagram.com/epopa_/"
                            target='_blank'
                            icon={BsInstagram}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    )
}


