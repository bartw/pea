import { UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Header } from "@/components/header";

const items = [
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

const Calendar = () => (
  <div className="bg-slate-900 h-screen text-slate-100 flex flex-col">
    <Header isAuthenticated />
    <main className="flex-1 mt-2 mb-4 overflow-scroll">
      <div className="p-4 text-slate-900 bg-emerald-300 uppercase">
        <h1 className="font-semibold text-xl">Players</h1>
      </div>
      <ul>
        <li className="border-b-2 px-4 py-2 flex">
          <UserPlusIcon className="h-12 w-12" />
          <div className="ml-4">
            <div className="text-lg">Add player</div>
          </div>
        </li>
        {items.map(({ name }) => (
          <li key={`${name}`} className="border-b-2 px-4 py-2 flex">
            <UserIcon className="h-12 w-12" />
            <div className="ml-4">
              <div className="text-lg">{name}</div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  </div>
);

export default Calendar;
