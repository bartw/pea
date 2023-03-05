import { AuthenticatedHeader } from "./authenticated-header";

export const Header = ({ isAuthenticated }: { isAuthenticated: boolean }) => (
  <header className="mx-4 my-2 bg-[url('/pea.svg')] bg-no-repeat bg-center bg-contain h-8">
    {isAuthenticated && <AuthenticatedHeader />}
  </header>
);
