import ThemeToggler from '@ui/ThemeToggler';
import LanguageToggler from './language-switch';

export default function Header() {
  return (
    <header className="inset-x-0 z-10 print:hidden">
      <div className="mx-auto flex max-w-[8.3in] flex-1 justify-end p-4">
        <div className="flex items-center">
          <ThemeToggler />
          <LanguageToggler />
        </div>
      </div>
    </header>
  );
}
