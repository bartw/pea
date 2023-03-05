import Link from "next/link";
import { useState } from "react";
import { CloseMenuButton } from "./close-menu-button";
import { OpenMenuButton } from "./open-menu-button";

export const AuthenticatedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between">
      {isMenuOpen ? (
        <CloseMenuButton onClick={() => setIsMenuOpen(false)} />
      ) : (
        <OpenMenuButton onClick={() => setIsMenuOpen(true)} />
      )}
      <Link href="/" className="underline">
        Sign out
      </Link>
    </div>
  );
};
