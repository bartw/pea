import { Header } from "@/components/header";

const items = [
  { name: "On-ice practice", date: "2023-03-05", from: "17:30", to: "18:30" },
  { name: "Off-ice practice", date: "2023-03-07", from: "17:30", to: "18:30" },
  { name: "On-ice practice", date: "2023-03-07", from: "19:00", to: "20:00" },
  { name: "On-ice practice", date: "2023-03-09", from: "17:30", to: "18:30" },
  { name: "On-ice practice", date: "2023-03-11", from: "17:30", to: "18:30" },
];

const Calendar = () => (
  <div className="bg-slate-900 h-screen text-slate-100 flex flex-col">
    <Header isAuthenticated />
    <main className="flex-1 mt-2">
      <div className="p-4 text-slate-900 bg-emerald-300 font-semibold uppercase">
        <h1>Calendar</h1>
      </div>
      <ul>
        {items.map(({ name, date, from, to }) => (
          <li key={`${name}${date}${from}${to}`} className="border-b-2 px-4 py-2">
            <div>{date}</div>
            <div>{from}</div>
            <div>{to}</div>
            <div>{name}</div>
          </li>
        ))}
      </ul>
    </main>
  </div>
);

export default Calendar;
