export const OpenMenuButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className=""
    type="button"
    onClick={onClick}
    style={{ width: 32, height: 24 }}
  >
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 2H32M0 12H32M0 22H32" stroke="#6EE7B7" stroke-width="4" />
    </svg>
  </button>
);
