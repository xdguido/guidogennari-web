import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from './Button';
import { ComponentPropsWithoutRef } from 'react';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
} & Omit<ComponentPropsWithoutRef<'a'>, 'href'>;

export default function NavLink({ children, href, ...props }: NavLinkProps) {
  const router = useRouter();

  return (
    <Button
      asChild
      variant="link"
      size="sm"
      className={
        router.pathname === href
          ? 'cursor-default text-muted-foreground hover:no-underline'
          : 'text-primary underline-offset-4 hover:underline'
      }
    >
      <Link href={href} {...props}>
        {children}
      </Link>
    </Button>
  );
}
