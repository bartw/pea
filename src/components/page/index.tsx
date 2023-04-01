import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Page = ({ children }: Props) => (
  <div className="bg-slate-900 h-screen text-slate-100 flex justify-center">
    <div className="max-w-3xl w-full flex flex-col">{children}</div>
  </div>
);
