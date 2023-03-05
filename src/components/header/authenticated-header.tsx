import Link from "next/link";
import { useState } from "react";
import { CloseMenuButton } from "./close-menu-button";
import { OpenMenuButton } from "./open-menu-button";

export const AuthenticatedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
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
            <ul>
              <li className="border-b-2">
                <Link href="/calendar" className="">
                  Calendar
                </Link>
              </li>
              <li className="border-b-2">
                <Link href="/players" className="">
                  Players
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
