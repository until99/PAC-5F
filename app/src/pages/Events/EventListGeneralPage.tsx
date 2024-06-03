import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import CardListMinItem from "@/layout/Cards/CardListMinItem";
import { Trophy } from "lucide-react";

interface Event {
  id: string;
  title: string;
  subtitle: string;
  reward: number;
  cover_image: string;
  started_date: string;
}

export default function EventListGeneralPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios
      .get<Event[]>("http://localhost:8080/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="mt-12 flex items-center gap-4">
        <Trophy size={"3rem"} />
        <h1 className="text-4xl font-bold">Competições</h1>
      </div>

      <input
        type="text"
        className="mt-24 w-full rounded-3xl border-2 border-solid border-gray-200 bg-magnifier bg-[length:1.25rem] bg-[0.75rem] bg-no-repeat px-4 py-2 indent-6 text-base outline-none placeholder:text-gray-800"
        placeholder="Procurar competições"
      />

      <h1 className="mt-12 text-2xl font-bold">Resultados</h1>

      <div className="flex flex-wrap justify-start gap-4">
        {events.map((event) => (
          <CardListMinItem
            key={event.id}
            id={parseInt(event.id)} // Converter para número
            title={event.title}
            eventType={event.subtitle} // Corrigido para eventType
            rewardPrice={event.reward}
            partipationsCount={0} // Defina o valor desejado
            daysAfterStart={0} // Defina o valor desejado
            imgLink={event.cover_image}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
