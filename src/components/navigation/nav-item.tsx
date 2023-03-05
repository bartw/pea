import Link from "next/link";

type Props = { href: string; label: string };

export const NavItem = ({ href, label }: Props) => (
    <Link href={href} className="block px-4 py-2">
      {label}
    </Link>
);
