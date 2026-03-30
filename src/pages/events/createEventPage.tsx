import EventPageTemplate from "./EventPageTemplate";
import { getEventBySlug } from "@/data/catalog/events";

const createEventPage = (slug: string) => {
  const EventPage = () => {
    const event = getEventBySlug(slug);

    if (!event) {
      return null;
    }

    return <EventPageTemplate event={event} />;
  };

  return EventPage;
};

export default createEventPage;
