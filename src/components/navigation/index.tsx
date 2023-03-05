import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ActiveNavItem } from "./active-nav-item";
import { CloseMenuButton } from "./close-menu-button";
import { NavItem } from "./nav-item";
import { OpenMenuButton } from "./open-menu-button";

const items = [
  { href: "/calendar", label: "Calendar" },
  { href: "/players", label: "Players" },
];

export const Navigation = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  return (
    <nav>
      <div className="mx-4 my-2 flex justify-between">
        {isMenuOpen ? (
          <CloseMenuButton onClick={closeMenu} />
        ) : (
          <OpenMenuButton onClick={openMenu} />
        )}
        <Link href="/" className="underline">
          Sign out
        </Link>
      </div>
      {isMenuOpen && (
        <ul className="mt-8">
          {items.map(({ href, label }) => (
            <li key={href} className="block border-t-2">
              {router.pathname === href ? (
                <ActiveNavItem label={label} onClick={closeMenu} />
              ) : (
                <NavItem href={href} label={label} />
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
