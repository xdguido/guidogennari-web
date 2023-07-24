import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import Button from './Button';

export default function ThemeToggler() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle Dark Mode"
            colorScheme="black"
            style="link"
            square
        >
            <span className="sr-only">Change theme</span>
            {theme === 'light' ? <FiSun className=" h-5 w-5" /> : <FiMoon className=" h-5 w-5" />}
        </Button>
    );
}
