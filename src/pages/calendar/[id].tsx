import { AuthenticatedPage } from "@/components/authenticated-page";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { Player } from "./player";

const event = {
  id: "123456781",
  name: "On-ice practice",
  date: "2023-03-05",
  from: "17:30",
  to: "18:30",
};

const players = [
  { name: "Jan" },
  { name: "Piet" },
  { name: "Joris" },
  { name: "Korneel" },
  { name: "Jos" },
  { name: "Karel" },
  { name: "Wannes" },
  { name: "Jeff" },
  { name: "Patrick" },
  { name: "Erik" },
];

const Event = () => (
  <AuthenticatedPage title={event.name}>
    <div>
      <div className="px-4 py-2 flex">
        <CalendarIcon className="h-12 w-12" />
        <div className="ml-4">
          <div>{event.date}</div>
          <div className="text-sm">
            {event.from} - {event.to}
          </div>
        </div>
      </div>
      <ul>
        {players.map(({ name }) => (
          <li key={`${name}`} className="border-b-2 px-4 py-2">
            <Player name={name} />
          </li>
        ))}
      </ul>
    </div>
  </AuthenticatedPage>
);

export default Event;
