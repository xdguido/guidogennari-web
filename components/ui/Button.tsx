import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import Link from 'next/link';

const buttonStyles = cva(
    clsx(
        'flex items-center justify-center px-6 py-2.5 font-medium text-sm leading-tight uppercase rounded',
        'focus:outline-none focus-visible:ring-offset-2 focus-visible:ring-2',
        'transition duration-150 ease-in-out'
    ),
    {
        variants: {
            style: {
                solid: clsx(
                    'bg-black text-white shadow-md',
                    'hover:bg-blue-600 hover:shadow-lg',
                    'focus-visible:bg-blue-600 focus-visible:shadow-lg',
                    'active:bg-blue-800 active:shadow-lg'
                ),
                outline: clsx(
                    'py-2 border-2 border-black ',
                    'hover:border-blue-600 hover:text-blue-700 ',
                    'active:text-blue-800 active:border-blue-800 active:bg-black active:bg-opacity-10'
                )
            },
            fullWidth: { true: 'w-full' }
        },
        defaultVariants: {
            style: 'solid'
        }
    }
);

interface ButtonProps {
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export default function Button({ style, fullWidth, children, onClick, href, ...props }: Props) {
    return href ? (
        <Link href={href} className={buttonStyles({ style, fullWidth })} {...props}>
            {children}
        </Link>
    ) : (
        <button onClick={onClick} className={buttonStyles({ style, fullWidth })} {...props}>
            {children}
        </button>
    );
}
