import { getMemberships } from "@/services/Events";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IEvent } from "@/interfaces/Event";
import { getEventById } from "@/services/Events";
import { pb } from "@/lib/pocketbase";
import ButtonGroup from "@/components/button/ButtonGroup";
import MinifiedCard from "@/components/card/MinifiedCard";
import { getUserById } from "@/services/Users";

export default function Profile() {
  const { id } = useParams<{ id: string }>();

  const [activeComponent, setActiveComponent] = useState<number>(1);
  const [events, setEvents] = useState<IEvent[]>([]);

  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserById(id || "");
        setUsername(res.username);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    const fetchEvents = async () => {
      try {
        const memberships = await getMemberships();
        const events = await Promise.all(
          memberships
            .filter(
              (membership) =>
                membership.user_id === id
            )
            .map(async (membership) => await getEventById(membership.event_id))
        );

        setEvents(events);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchEvents();
    fetchUser();
  }, []);

  const renderContent = () => {
    switch (activeComponent) {
      case 1:
        return (
          <div className="event-list">
            {events
              .filter((event) => event.organizer === "true")
              .map((event) => (
                <MinifiedCard key={event.id} {...event} />
              ))}
          </div>
        );
      case 2:
        return (
          <div className="event-list">
            {events
              .filter((event) => event.organizer !== "true")
              .map((event) => (
                <MinifiedCard key={event.id} {...event} />
              ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-12">
      <div className="header mt-12 flex flex-col gap-12">
        <div className="title">
          <h1 className="text-5xl font-bold">
            {username.charAt(0).toUpperCase() + username.slice(1)}
          </h1>
        </div>

        {id === pb.authStore.model?.id ? (
          <div className="flex items-center gap-4">
            <Link
              to={"/create-event"}
              className="w-fit rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md"
            >
              Novo Evento
            </Link>
            <Link
              to={`/profile/update/${pb.authStore.model?.id}`}
              className="rounded-full px-8 py-3 hover:bg-slate-100"
            >
              Update Profile
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>

      <ButtonGroup onButtonClick={setActiveComponent} />

      <div className="event-list mt-12">{renderContent()}</div>
    </div>
  );
}
