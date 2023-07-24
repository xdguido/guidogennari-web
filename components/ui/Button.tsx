import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const buttonStyles = cva(
    [
        'flex items-center justify-center gap-2 px-6 py-2.5 font-medium leading-tight rounded-md',
        'focus:outline-none focus-visible:ring-offset-2 focus-visible:ring-2',
        'transition duration-150 ease-in-out'
    ],
    {
        variants: {
            colorScheme: {
                blue: ['text-blue-600'],
                gray: ['text-gray-500'],
                black: ['text-inherit']
            },
            styleScheme: {
                solid: ['shadow-md text-gray-50', 'hover:shadow-lg', 'focus-visible:shadow-lg'],
                outline: ['py-2 border bg-inherit'],
                link: ['bg-inherit', 'hover:text-blue-600']
            },
            fullWidth: { true: 'w-full' },
            uppercase: { true: 'uppercase' },
            square: { true: 'px-2.5' }
        },
        defaultVariants: {
            colorScheme: 'blue',
            styleScheme: 'solid'
        },
        compoundVariants: [
            {
                colorScheme: 'blue',
                styleScheme: 'solid',
                class: ['bg-blue-600', 'hover:bg-blue-500 ', 'focus-visible:bg-blue-500']
            },
            {
                colorScheme: 'blue',
                styleScheme: 'outline',
                class: [
                    'border-blue-600 text-blue-600',
                    'hover:border-blue-500 hover:text-blue-500',
                    'focus-visible:border-blue-500 focus-visible:text-blue-500'
                ]
            },
            {
                colorScheme: 'gray',
                styleScheme: 'solid',
                class: ['bg-gray-500', 'hover:bg-gray-400 ', 'focus-visible:bg-gray-500']
            },
            {
                colorScheme: 'gray',
                styleScheme: 'outline',
                class: [
                    'border-gray-500 text-gray-500',
                    'hover:border-gray-400 hover:text-gray-400',
                    'focus-visible:border-gray-400 focus-visible:text-gray-400'
                ]
            },
            {
                colorScheme: 'black',
                styleScheme: 'solid',
                class: ['bg-black', 'hover:bg-blue-500 ', 'focus-visible:bg-blue-500']
            },
            {
                colorScheme: 'black',
                styleScheme: 'outline',
                class: [
                    'border-black text-black',
                    'hover:border-blue-500 hover:text-blue-500',
                    'focus-visible:border-blue-500 focus-visible:text-blue-500'
                ]
            }
        ]
    }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonAndLinkProps = ButtonProps | LinkProps;

type Props = ButtonAndLinkProps & VariantProps<typeof buttonStyles>;

export default function Button(props: Props) {
    const { colorScheme, styleScheme, fullWidth, uppercase, square } = props as VariantProps<
        typeof buttonStyles
    >;

    if ('href' in props) {
        const { className, href, children, ...otherProps } = props as LinkProps;
        return (
            <Link
                href={href}
                className={`${buttonStyles({
                    colorScheme,
                    styleScheme,
                    fullWidth,
                    uppercase,
                    square
                })} ${className}`}
                {...otherProps}
            >
                {children}
            </Link>
        );
    }

    const { className, children, ...otherProps } = props as ButtonProps;
    return (
        <button
            className={`${buttonStyles({
                colorScheme,
                styleScheme,
                fullWidth,
                uppercase,
                square
            })} ${className}`}
            {...otherProps}
        >
            {children}
        </button>
    );
}
