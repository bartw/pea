type Props = { label: string; onClick: () => void };

export const ActiveNavItem = ({ label, onClick }: Props) => (
  <button type="button" onClick={onClick} className="block px-4 py-2 w-full text-left">
    {label}
  </button>
);
