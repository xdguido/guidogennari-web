import Button from '@ui/Button';
import ThemeToggler from '@ui/ThemeToggler';

export default function Header() {
  return (
    <header className="inset-x-0 z-10 print:hidden">
      <div className="mx-auto flex max-w-[8.3in] flex-1 justify-end px-6 py-4 lg:py-5">
        <div className="flex items-center">
          <ul id="nav" className="flex gap-2 p-2">
            <li>
              <Button
                className="font-normal"
                href={'/'}
                colorScheme="black"
                styleScheme="link"
                square
              >
                About
              </Button>
            </li>
            <li>
              <Button
                className="font-normal"
                href={'/resume'}
                colorScheme="black"
                styleScheme="link"
                square
              >
                Resume
              </Button>
            </li>
          </ul>
          <div className="flex items-center justify-center  ">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
}
