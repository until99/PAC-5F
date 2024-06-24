import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IEvent } from "@/interfaces/Event";
import { getUserById } from "@/services/Users";
import { IUser } from "@/interfaces/User";
import { assignUserToEvent, getEventById, getMemberships } from "@/services/Events";
import { pb } from "@/lib/pocketbase";
export default function Event() {
  const { id } = useParams<{ id: string }>();

  const [event, setEvent] = useState<IEvent | null>(null);
  const [organizer, setOrganizer] = useState<IUser | null>(null);
  const [isParticipant, setIsParticipant] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (id) {
          const eventData = await getEventById(id);
          setEvent(eventData);

          if (eventData?.organizer) {
            const organizerData = await getUserById(eventData.organizer);
            setOrganizer(organizerData);
          }

          const memberships = await getMemberships();
          const userId = pb.authStore.model?.id;

          const temp = memberships.map((membership) => ({
            id: membership.id,
            user_id: membership.user_id,
            event_id: membership.event_id,
            created: membership.created,
            updated: membership.updated,
          }));

          const participant = temp.find(
            (membership) =>
              membership.user_id === userId && membership.event_id === id
          );
          setIsParticipant(!!participant);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event || !organizer) {
    return <div>Event or Organizer not found</div>;
  }

  return (
    <div className="mx-12">
      {!isParticipant && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => assignUserToEvent(event.id, pb.authStore.model?.id, false)}
        >
          Join Event
        </button>
      )}

      <p>{event.id}</p>
      <p>{event.title}</p>
      <p>{event.subtitle}</p>
      <p>
        Organizer: <Link to={`/profile/${organizer.id}`}>{organizer.username}</Link>
      </p>
      {event.cover_image && (
        <div className="flex">
          <img
            src={`https://hell.pockethost.io/api/files/ee6o5jws39515n1/${event.id}/${event.cover_image}`}
            alt={event.title}
            className="h-96 w-96 rounded-md"
          />
        </div>
      )}
    </div>
  );
}
