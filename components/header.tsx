import ThemeToggler from '@ui/ThemeToggler';
import NavLink from '@ui/NavLink';

export default function Header() {
  return (
    <header className="inset-x-0 z-10 print:hidden">
      <div className="mx-auto flex max-w-[8.3in] flex-1 justify-end px-6 py-4 lg:py-5">
        <div className="flex items-center">
          <ul id="nav" className="flex">
            <li>
              <NavLink href={'/'}>About</NavLink>
            </li>
            <li>
              <NavLink href={'/resume'}>Resume</NavLink>
            </li>
          </ul>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
