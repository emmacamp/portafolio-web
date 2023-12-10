'use client';
import { Footer } from 'flowbite-react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';


export const FooterFB = () => {
    return (
        <Footer container className='mt-5 rounded-none absolute left-0 bottom-0'>
            <div  className="w-full ">
                <div className="mx-auto container flex justify-between items-center">
                    <Footer.Copyright
                        by="Emmanuel Popa"
                        className=''
                        year={new Date().getFullYear()}
                    />
                    <div className="flex space-x-6  justify-center items-center">
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


