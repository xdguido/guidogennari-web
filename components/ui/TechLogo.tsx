import Link from 'next/link';
import { SiMongodb, SiExpress, SiNextdotjs, SiReact } from 'react-icons/si';

export default function TechLogo({
    icon,
    ...props
}: {
    icon: 'react' | 'next' | 'mongodb' | 'express';
}) {
    return (
        <Link
            href={`
            ${icon === 'react' && 'https://reactjs.org/'}
            ${icon === 'next' && 'https://nextjs.org/'}
            ${icon === 'mongodb' && 'https://expressjs.com/'}
            ${icon === 'express' && 'https://www.mongodb.com/'}`}
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
