import Link from "next/link";
import { useState } from "react";
import { CloseMenuButton } from "./close-menu-button";
import { OpenMenuButton } from "./open-menu-button";

const items = [
  { href: "/calendar", label: "Calendar" },
  { href: "/players", label: "Players" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-between">
        <OpenMenuButton onClick={() => setIsMenuOpen(true)} />
        <Link href="/" className="underline">
          Sign out
        </Link>
      </div>
      {isMenuOpen && (
        <div className="absolute left-0 top-0 bg-slate-900 h-screen w-screen text-slate-100">
          <div className="mx-4 my-2 bg-[url('/pea.svg')] bg-no-repeat bg-center bg-contain h-8">
            <CloseMenuButton onClick={() => setIsMenuOpen(false)} />
          </div>
          <ul className="mt-8">
            {items.map(({ href, label }) => (
              <li key={href} className="block border-t-2">
                <Link href={href} className="block px-4 py-2">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
