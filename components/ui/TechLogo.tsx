import Link from 'next/link';
import { SiMongodb, SiExpress, SiNextdotjs, SiReact } from 'react-icons/si';

export default function TechLogo({
    icon,
    ...props
}: {
    icon: 'react' | 'next' | 'mongodb' | 'express';
}) {
    let link: string;
    switch (icon) {
        case 'react':
            link = 'https://reactjs.org/';
            break;
        case 'next':
            link = 'https://nextjs.org/';
            break;
        case 'mongodb':
            link = 'https://www.mongodb.com/';
            break;
        case 'express':
            link = 'https://expressjs.com/';
            break;
    }
    return (
        <Link
            href={link}
            target="_blank"
            className="flex justify-center items-center gap-2 text-slate-500"
            {...props}
        >
            {icon === 'react' && (
                <>
                    <SiReact className="h-7 w-7" />
                    <span>React</span>
                </>
            )}
            {icon === 'next' && (
                <>
                    <SiNextdotjs className="h-6 w-6" /> <span>Next.js</span>
                </>
            )}
            {icon === 'mongodb' && (
                <>
                    <SiMongodb className="h-6 w-6" /> <span>MongoDB</span>
                </>
            )}
            {icon === 'express' && (
                <>
                    <SiExpress className="h-6 w-6" /> <span>Express.js</span>
                </>
            )}
        </Link>
    );
}
