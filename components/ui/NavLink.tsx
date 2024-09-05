import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from './Button';

export default function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
  const router = useRouter();

  return (
    <Button
      asChild
      variant="link"
      className={
        router.pathname === href
          ? 'cursor-default text-muted-foreground hover:no-underline'
          : 'text-primary underline-offset-4 hover:underline'
      }
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
