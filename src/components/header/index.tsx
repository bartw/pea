import { ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => (
  <header className="mx-4 my-2 bg-[url('/pea.svg')] bg-no-repeat bg-center bg-contain h-8">
    {children}
  </header>
);
