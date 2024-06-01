import Navbar from "@/layout/Navbar";
import EventSection from "@/layout/EventList/EventSection";
import EventSearchTopicSection from "@/layout/EventList/EventSearchTopicSection";
import { Flame } from "lucide-react";
import Footer from "@/layout/Footer";
import CardListItem from "@/layout/Cards/CardListItem";

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
      <EventSection />
      <EventSearchTopicSection />
      <div className="mt-12 flex gap-4">
        <Flame />
        <h1 className="text-2xl font-bold">Competições Ativas</h1>
      </div>
      <div className="flex flex-wrap justify-start gap-[116px]">
        <CardListItem />
        <CardListItem />
        <CardListItem />
        <CardListItem />
        <CardListItem />
        <CardListItem />
        <CardListItem />
      </div>
      <Footer />
    </div>
  );
}
