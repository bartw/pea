export const CloseMenuButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="flex justify-center items-center"
    type="button"
    onClick={onClick}
    style={{ width: 32, height: 24 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
    >
      <path
        d="M1.58582 24.2132L24.2132 1.58578M2.41424 1.58579L25.0417 24.2132"
        stroke="#6EE7B7"
        stroke-width="4"
      />
    </svg>
  </button>
);
