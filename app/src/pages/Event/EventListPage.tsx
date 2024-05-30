import { useEffect, useState } from "react";
import Navbar from "@/layout/Navbar";
import { Link } from "react-router-dom";

import axios, { AxiosResponse } from "axios";

// interface Event {
//   id: number;
//   title: string;
//   subtitle: string;
//   start_date: string;
// }

export default function EventListPage() {
  // const [events, setEvents] = useState<Event[]>([]);

  // useEffect(() => {
  //   axios
  //     .get<Event[]>("http://localhost:6969/events")
  //     .then((response: AxiosResponse<Event[]>) => {
  //       setEvents(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao obter os eventos:", error);
  //     });
  // }, []);

  return (
    <div>
      <Navbar />
      {/* <ul className="my-8 grid grid-cols-5 gap-4">
        {events.map((item) => (
          <li key={item.id} className="">
            <Link
              to={`/events/${item.id}`}
              className="flex w-[200px] flex-col rounded-lg py-4 text-blue-500 outline-none hover:underline"
            >
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p>{item.subtitle}</p>
              <p>{item.start_date}</p>
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
