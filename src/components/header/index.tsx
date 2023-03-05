import { ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => (
  <header>
    <div className="mt-2 bg-[url('/pea.svg')] bg-no-repeat bg-center bg-contain h-8" />
    <div className="-mt-8">
    {children}
    </div>
  </header>
);
