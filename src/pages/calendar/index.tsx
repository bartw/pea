import { CalendarIcon, PlusIcon } from "@heroicons/react/24/solid";
import { AuthenticatedPage } from "@/components/authenticated-page";
import Link from "next/link";

const events = [
  {
    id: "123456781",
    name: "On-ice practice",
    date: "2023-03-05",
    from: "17:30",
    to: "18:30",
  },
  {
    id: "123456782",
    name: "Off-ice practice",
    date: "2023-03-07",
    from: "17:30",
    to: "18:30",
  },
  {
    id: "123456783",
    name: "On-ice practice",
    date: "2023-03-07",
    from: "19:00",
    to: "20:00",
  },
  {
    id: "123456784",
    name: "On-ice practice",
    date: "2023-03-09",
    from: "17:30",
    to: "18:30",
  },
  {
    id: "123456785",
    name: "On-ice practice",
    date: "2023-03-11",
    from: "17:30",
    to: "18:30",
  },
  {
    id: "123456786",
    name: "On-ice practice",
    date: "2023-03-12",
    from: "17:30",
    to: "18:30",
  },
  {
    id: "123456787",
    name: "On-ice practice",
    date: "2023-03-13",
    from: "17:30",
    to: "18:30",
  },
  {
    id: "123456788",
    name: "On-ice practice",
    date: "2023-03-14",
    from: "17:30",
    to: "18:30",
  },
  {
    id: "123456789",
    name: "On-ice practice",
    date: "2023-03-15",
    from: "17:30",
    to: "18:30",
  },
  {
    id: "123456790",
    name: "On-ice practice",
    date: "2023-03-16",
    from: "17:30",
    to: "18:30",
  },
  {
    id: "123456791",
    name: "On-ice practice",
    date: "2023-03-17",
    from: "17:30",
    to: "18:30",
  },
  {
    id: "123456792",
    name: "On-ice practice",
    date: "2023-03-18",
    from: "17:30",
    to: "18:30",
  },
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
      {events.map(({ id, name, date, from, to }) => (
        <li key={id} className="border-b-2">
          <Link href={`/calendar/${id}`} className="px-4 py-2 flex">
            <CalendarIcon className="h-12 w-12" />
            <div className="ml-4">
              <div>{date}</div>
              <div className="text-sm">
                {from} - {to}
              </div>
              <div className="text-lg">{name}</div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </AuthenticatedPage>
);

export default Calendar;
