import Card from "@/components/card/Card";
import { IEvent } from "@/interfaces/Event";
import { getEvents } from "@/services/Events";
import { Flame } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Events() {
  const [events, setEvents] = useState<IEvent[]>([]);

  const fetchEvents = async () => {
    const records = await getEvents();
    console.log("records", records);
    
    const events = records.map((record) => ({
      id: record.id,
      title: record.title,
      subtitle: record.subtitle,
      cover_image: record.cover_image,
      organizer: record.organizer,
      reward: record.reward,
      event_flags: record.event_flags,
      started_date: record.started_date,
      finish_date: record.finish_date,
      sections: record.sections,
      participants: record.participants,
      created: record.created,
      updated: record.updated,
    }));
    
    setEvents(events);
    
    console.log("events", events);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <div className="hero-section mt-32 flex items-center justify-between">
        <div className="title-wrapper">
          <h1 className="text-6xl font-bold leading-[72px] text-black">
            Eventos
          </h1>
          <p className="pt-6 text-gray-600">
            Aumente suas habilidades e crie conexões valiosas exercitando sua{" "}
            <br />
            mente com competições e eventos.
          </p>
          <div className="hero-footer flex gap-4 pt-10">
            <Link
              to={"/create-event"}
              className="rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md"
            >
              Organize um evento
            </Link>
          </div>
        </div>
        <img
          src={"https://i.imgur.com/65nKFRo.png"}
          alt="a girl with mechanic arm doing a pose"
          className="w-1/2"
        />
      </div>

      <div className="mt-12 flex items-center gap-4">
        <Flame />
        <h1 className="text-2xl font-bold">Competições</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-12">
        {events.map((event) => (
          <Card
            key={event.id}
            id={event.id}
            title={event.title}
            subtitle={event.subtitle}
            cover_image={event.cover_image}
            organizer={event.organizer}
            reward={event.reward}
            event_flags={event.event_flags}
            started_date={event.started_date}
            finish_date={event.finish_date}
            sections={event.sections}
            participants={event.participants}
            created={event.created}
            updated={event.updated}
          />
        ))}
      </div>
    </>
  );
}
