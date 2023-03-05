import { XMarkIcon } from "@heroicons/react/24/solid";

export const CloseMenuButton = ({ onClick }: { onClick: () => void }) => (
  <button className="h-8 w-8" type="button" onClick={onClick}>
    <XMarkIcon className="text-emerald-300" />
  </button>
);
