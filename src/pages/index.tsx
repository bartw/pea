import { Header } from "@/components/header";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <div className="bg-slate-900 h-screen text-slate-100 flex flex-col">
      <Header isAuthenticated={false} />
      <main className="px-4 py-2 flex-1 flex flex-col justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/calendar");
          }}
        >
          <div>
            <label htmlFor="email" className="block">
              Email address
            </label>
            <input
              id="email"
              type="text"
              className="block w-full text-slate-900 p-2"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              id="password"
              className="block w-full text-slate-900 p-2"
              type="text"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-emerald-300 p-4 text-slate-900 font-semibold"
          >
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};

export default Home;
