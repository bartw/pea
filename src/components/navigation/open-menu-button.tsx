import { Bars3Icon } from "@heroicons/react/24/solid";

export const OpenMenuButton = ({ onClick }: { onClick: () => void }) => (
  <button className="h-8 w-8" type="button" onClick={onClick}>
    <Bars3Icon className="text-emerald-300" />
  </button>
);
