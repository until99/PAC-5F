// EventListPage.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/layout/Navbar";
import EventSection from "@/layout/EventList/EventSection";
import EventSearchTopicSection from "@/layout/EventList/EventSearchTopicSection";
import { Flame } from "lucide-react";
import Footer from "@/layout/Footer";
import CardListItem from "@/layout/Cards/CardListItem";

interface Event {
  id: string;
  title: string;
  subtitle: string;
  reward: number;
  cover_image: string; // Alterado para cover_image
  started_date: string; // Alterado para started_date
}

export default function EventListPage() {
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
    <div>
      <Navbar />
      <EventSection />
      <EventSearchTopicSection />
      <div className="mt-12 flex gap-4">
        <Flame />
        <h1 className="text-2xl font-bold">Competições</h1>
      </div>
      <div className="grid grid-cols-4">
        {events.map((event) => (
          <CardListItem
            key={event.id} // Removido key do CardListItem
            id={event.id} // Adicionado id corretamente
            imgLink={event.cover_image}
            title={event.title}
            subtitle={event.subtitle}
            reward={event.reward}
            startedDate={event.started_date}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
