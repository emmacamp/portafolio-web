import { figmaLogo, githubLogo } from "@/assets/technologies";
import Image from "next/image";
import Link from "next/link";
import { UrlObject } from "url";

interface CardProps {
    title: string
    text: string
    icon: any
    className?: string
    date?: string
    footer?: any
}
interface TechIcons {
    src: string,
    alt: string,
    className: string,
    label: string
    url?: UrlObject | string
}


export const Card = ({ title, text, icon, className, date, footer }: CardProps) => (
    <div style={{ height: '270px', minWidth: '280px' }} className={` relative snap-center h-96 w-96 card-component bg-white dark:bg-slate-800 rounded-lg px-6 py-8 sm:py-10 ring-1 ring-slate-900/5 shadow-xl sm:w-64  sm:mt-10 sm:mx-2 ${className}`}>
        <div className="flex h-14 items-end gap-2 mb-5">
            <span className="inline-flex items-center justify-center p-2 bg-blue-600 dark:bg-blue-800 text-white rounded-md shadow-lg">
                {icon}
            </span>
            <div>
                <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                    {title}
                </h3>
                <small className="text-slate-400  dark:text-blue-500 relative bottom-1 italic">{date}</small>
            </div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            {String(text).length > 100 ? String(text).substring(0, 100) + '...' : text}
        </p>
    </div>
)
