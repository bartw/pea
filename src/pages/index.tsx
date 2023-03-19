import { Authentication } from "@/components/authentication";
import { Header } from "@/components/header";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const isAuthenticated = !!useUser();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/calendar");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="bg-slate-900 h-screen text-slate-100 flex flex-col">
      <Header />
      <main className="px-4 py-2 flex-1 flex flex-col justify-center">
        <Authentication />
      </main>
    </div>
  );
};

export default Home;
