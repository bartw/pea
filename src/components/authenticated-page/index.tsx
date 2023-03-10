import { ReactNode } from "react";
import { Header } from "../header";
import { Navigation } from "../navigation";

type Props = {
  title: string;
  children: ReactNode;
};

export const AuthenticatedPage = ({ title, children }: Props) => (
  <div className="bg-slate-900 h-screen text-slate-100 flex flex-col">
    <Header>
      <Navigation />
    </Header>
    <main className="flex-1 mt-2 mb-4 overflow-scroll">
      <div className="p-4 text-slate-900 bg-emerald-300 uppercase">
        <h1 className="font-semibold text-xl">{title}</h1>
      </div>
      {children}
    </main>
  </div>
);
