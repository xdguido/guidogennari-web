import Link from 'next/link';
import { SiMongodb, SiExpress, SiNextdotjs, SiReact } from 'react-icons/si';

function MyLink({ href, children, ...props }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            target="_blank"
            className="flex justify-center items-center gap-2 text-slate-500"
            {...props}
        >
            {children}
        </Link>
    );
}

export function ReactLogo({ ...props }) {
    return (
        <MyLink href="https://reactjs.org/" {...props}>
            <SiReact className="h-7 w-7" />
            <span>React</span>
        </MyLink>
    );
}
export function NextjsLogo({ ...props }) {
    return (
        <MyLink href="https://nextjs.org/" {...props}>
            <SiNextdotjs className="h-6 w-6" /> <span>Next.js</span>
        </MyLink>
    );
}
export function ExpressjsLogo({ ...props }) {
    return (
        <MyLink href="https://expressjs.com/" {...props}>
            <SiExpress className="h-6 w-6" /> <span>Express.js</span>
        </MyLink>
    );
}
export function MongodbLogo({ ...props }) {
    return (
        <MyLink href="https://www.mongodb.com/" {...props}>
            <SiMongodb className="h-6 w-6" /> <span>MongoDB</span>
        </MyLink>
    );
}
