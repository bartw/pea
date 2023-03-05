import { CalendarIcon, PlusIcon } from "@heroicons/react/24/solid";
import { AuthenticatedPage } from "@/components/authenticated-page";

const items = [
  { name: "On-ice practice", date: "2023-03-05", from: "17:30", to: "18:30" },
  { name: "Off-ice practice", date: "2023-03-07", from: "17:30", to: "18:30" },
  { name: "On-ice practice", date: "2023-03-07", from: "19:00", to: "20:00" },
  { name: "On-ice practice", date: "2023-03-09", from: "17:30", to: "18:30" },
  { name: "On-ice practice", date: "2023-03-11", from: "17:30", to: "18:30" },
  { name: "On-ice practice", date: "2023-03-12", from: "17:30", to: "18:30" },
  { name: "On-ice practice", date: "2023-03-13", from: "17:30", to: "18:30" },
  { name: "On-ice practice", date: "2023-03-14", from: "17:30", to: "18:30" },
  { name: "On-ice practice", date: "2023-03-15", from: "17:30", to: "18:30" },
  { name: "On-ice practice", date: "2023-03-16", from: "17:30", to: "18:30" },
  { name: "On-ice practice", date: "2023-03-17", from: "17:30", to: "18:30" },
  { name: "On-ice practice", date: "2023-03-18", from: "17:30", to: "18:30" },
];

const Calendar = () => (
  <AuthenticatedPage title="Calendar">
    <ul>
      <li className="border-b-2 px-4 py-2 flex">
        <PlusIcon className="h-12 w-12" />
        <div className="ml-4">
          <div className="text-lg">Add event</div>
        </div>
      </li>
      {items.map(({ name, date, from, to }) => (
        <li
          key={`${name}${date}${from}${to}`}
          className="border-b-2 px-4 py-2 flex"
        >
          <CalendarIcon className="h-12 w-12" />
          <div className="ml-4">
            <div>{date}</div>
            <div className="text-sm">
              {from} - {to}
            </div>
            <div className="text-lg">{name}</div>
          </div>
        </li>
      ))}
    </ul>
  </AuthenticatedPage>
);

export default Calendar;
