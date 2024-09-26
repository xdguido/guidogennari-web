import ThemeToggler from '@ui/ThemeToggler';
import NavLink from '@ui/NavLink';
import LanguageToggler from './language-switch';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === 'en'
      ? { about: 'About', resume: 'Resume' }
      : { about: 'Acerca de', resume: 'Currículum' };
  return (
    <header className="inset-x-0 z-10 print:hidden">
      <div className="mx-auto flex max-w-[8.3in] flex-1 justify-end p-4">
        <div className="flex items-center">
          <ul id="nav" className="flex">
            <li>
              <NavLink href={'/'}>{t.about}</NavLink>
            </li>
            <li>
              <NavLink href={'/resume'}>{t.resume}</NavLink>
            </li>
          </ul>
          <ThemeToggler />
          <LanguageToggler />
        </div>
      </div>
    </header>
  );
}
