import { ReactNode } from "react"

interface Props { 
    title: string;
    paragraph?: string; 
    className?: string; 
    children: ReactNode;
}

export const Section = ({ title, paragraph, children, className }: Props) => {


    return (
        <section className={` dark:bg-gray-900 ${className}`} id='contact'>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    {title}
                </h2>
                {
                    paragraph &&
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                    </p>
                }
                {children}
            </div>
        </section>
    )
}
