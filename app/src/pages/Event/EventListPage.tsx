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
        <h1 className="text-2xl font-bold">Competições</h1>
      </div>
      <div className="flex flex-wrap justify-start gap-[116px]">
        <CardListItem
          id={1}
          imgLink={
            "https://i.pinimg.com/564x/9f/15/6f/9f156f1820e5970fcb4ed6194680b590.jpg"
          }
        />
        <CardListItem
          id={1}
          imgLink={
            "https://i.pinimg.com/564x/22/93/ed/2293eddf8dd220cc2ec7cad9a53b3f32.jpg"
          }
        />
        <CardListItem
          id={1}
          imgLink={
            "https://i.pinimg.com/564x/8e/bb/84/8ebb845d7f2aafb53c206152079f21a0.jpg"
          }
        />
        <CardListItem
          id={1}
          imgLink={
            "https://i.pinimg.com/736x/39/10/46/3910467295e20f1a8d9c3f775d7427aa.jpg"
          }
        />
        <CardListItem
          id={1}
          imgLink={
            "https://i.pinimg.com/564x/9d/fe/6c/9dfe6cb0d8deadb93bd5ea8fe802f3e1.jpg"
          }
        />
        <CardListItem
          id={1}
          imgLink={
            "https://i.pinimg.com/564x/af/02/4f/af024f9724dce12e796bfab623433e2c.jpg"
          }
        />
        <CardListItem
          id={1}
          imgLink={
            "https://i.pinimg.com/564x/43/4e/c3/434ec3badadecb352009a711a722fd39.jpg"
          }
        />
      </div>
      <Footer />
    </div>
  );
}
