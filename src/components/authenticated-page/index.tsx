import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { Header } from "../header";
import { Navigation } from "../navigation";
import { Page } from "../page";

type Props = {
  title: string;
  children: ReactNode;
};

export const AuthenticatedPage = ({ title, children }: Props) => {
  const isAuthenticated = !!useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  return (
    <Page>
      <Header>
        <Navigation />
      </Header>
      <main className="flex-1 mt-2 mb-4 overflow-scroll">
        <div className="p-4 text-slate-900 bg-emerald-300 uppercase">
          <h1 className="font-semibold text-xl">{title}</h1>
        </div>
        {children}
      </main>
    </Page>
  );
};
