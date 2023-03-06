import { CheckIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Attendance = "INITIAL" | "PRESENT" | "ABSENT";

export const PlayerAttendance = ({ name }: { name: string }) => {
  const [attendance, setAttendance] = useState<Attendance>("INITIAL");

  return (
    <div className="flex">
      <UserIcon className="h-12 w-12" />
      <div className="ml-4 text-lg flex-1">{name}</div>
      <button
        type="button"
        onClick={() => {
          setAttendance((current) =>
            current === "PRESENT" ? "INITIAL" : "PRESENT"
          );
        }}
        aria-label="present"
        className={`ml-2 ${attendance === "PRESENT" ? "text-emerald-300" : ""}`}
      >
        <CheckIcon className="h-12 w-12" />
      </button>
      <button
        type="button"
        onClick={() => {
          setAttendance((current) =>
            current === "ABSENT" ? "INITIAL" : "ABSENT"
          );
        }}
        aria-label="absent"
        className={`ml-2 ${attendance === "ABSENT" ? "text-emerald-300" : ""}`}
      >
        <XMarkIcon className="h-12 w-12" />
      </button>
    </div>
  );
};
