'use client';

import { useRef, useState } from 'react';
import { useForm } from '@/hooks/useForm';

import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Loader } from '@mantine/core';


export const Contact = () => {
    const formRef = useRef<HTMLFormElement>({} as HTMLFormElement);
    const [isLoading, setIsLoading] = useState<Boolean>(false);

    const { user_name, onInputChange } = useForm({
        user_name: '',
        user_email: '',
        user_subject: '',
        message: ''
    });


    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsLoading(true)

        emailjs
            .sendForm('service_psu920h', 'template_xmgl16s', formRef.current, 'vOmnn3l-dN89uOhm4')
            .then((result) => {
                toast.success('Message sent successfully ' + user_name)
                setIsLoading(false)
            }, (error) => {
                console.log(error.text);
                toast.error('Error sending message ' + user_name)
                setIsLoading(false)
            });
    }



    return (
        <section className="bg-white dark:bg-gray-900" id='contact'>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Your name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            required
                            onChange={onInputChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="What's your name?"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="user_email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Your email
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            required
                            onChange={onInputChange}
                            placeholder="name@example.com"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="user_subject"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="user_subject"
                            name="user_subject"
                            required
                            onChange={onInputChange}
                            placeholder="Let us know how we can help you"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            onChange={onInputChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a comment..."
                        />
                    </div>
                    <button type="submit" className="flex py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  dark:hover:bg-blue-500 dark:focus:ring-primary-800">
                        Send message
                        {
                            isLoading && 
                        <Loader style={{ marginLeft: 10 }} color='white'  size={18} />
                        }
                    </button>
                </form>
            </div>
        </section>
    )
}
