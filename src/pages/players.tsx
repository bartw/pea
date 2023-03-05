import { UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { AuthenticatedPage } from "@/components/authenticated-page";

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

const Players = () => (
  <AuthenticatedPage title="Players">
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
  </AuthenticatedPage>
);

export default Players;
