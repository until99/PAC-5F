import { pb } from "@/lib/pocketbase";
import { IEvent } from "@/interfaces/Event";
import { IMembership } from "@/interfaces/Membership";

export const getEvents = async (): Promise<IEvent[]> => {
  try {
    const res = await pb.collection("TB_EVENTS").getList<IEvent>(1, 10);
    const eventsData = res.items.map((item: any) => ({
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      cover_image: item.cover_image,
      organizer: item.organizer,
      reward: item.reward,
      event_flags: item.event_flags,
      started_date: item.started_date,
      finish_date: item.finish_date,
      sections: item.sections,
      participants: item.participants,
      created: item.created,
      updated: item.updated,
    }));

    return eventsData;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const getEventById = async (id: string): Promise<IEvent> => {
  try {
    const res = await pb.collection("TB_EVENTS").getOne<IEvent>(id);
    
    const event = {
      id: res.id,
      title: res.title,
      subtitle: res.subtitle,
      cover_image: res.cover_image,
      organizer: res.organizer,
      reward: res.reward,
      event_flags: res.event_flags,
      started_date: res.started_date,
      finish_date: res.finish_date,
      sections: res.sections,
      participants: res.participants,
      created: res.created,
      updated: res.updated,
    };

    return event;
  } catch (error) {
    console.error("Error fetching event:", error);
    throw error;
  }
};

export const assignUserToEvent = async (eventId: string, userId: string, isOrganizer: boolean) => {
  const formData = new FormData();
  formData.append('user_id', userId);
  formData.append('event_id', eventId);
  formData.append('organizer', isOrganizer.toString());

  try {
    await pb.collection('TB_MEMBERSHIP').create(formData);
    window.location.reload();
  } catch (error) {
    console.error("Error assigning user to event:", error);
  }
};

export const getMemberships = async (): Promise<IMembership[]> => {
  try {
    const res = await pb.collection('TB_MEMBERSHIP').getFullList<IMembership>();
    return res;
  } catch (error) {
    console.error("Error fetching memberships:", error);
    throw error;
  }
};
