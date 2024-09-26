import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Button } from './Button';

export default function ThemeToggler() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? { switchTheme: 'Toggle theme' } : { switchTheme: 'Cambiar tema' };
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      variant="link"
      size="sm"
      aria-label={t.switchTheme}
      title={t.switchTheme}
    >
      {theme === 'light' ? <FiSun className=" h-5 w-5" /> : <FiMoon className=" h-5 w-5" />}
    </Button>
  );
}
