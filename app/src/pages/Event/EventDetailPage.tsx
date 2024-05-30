import Navbar from "@/layout/Navbar";

// interface Event {
//   id: number;
//   title: string;
//   subtitle: string;
//   description: string;
//   start_date: string;
//   duration: number;
//   cover_picture: string;
//   submit_list: string;
//   id_tags: number[];
//   reward_amount: string;
// }

export default function EventDetailsPage() {
  // const { id } = useParams<{ id: string }>();
  // const [event, setEvent] = useState<Event | null>(null);

  // useEffect(() => {
  //   axios
  //     .get<Event>(`http://localhost:8080/event/${id}`)
  //     .then((response: AxiosResponse<Event>) => {
  //       setEvent(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(`Erro ao obter o evento com o ID ${id}:`, error);
  //     });
  // }, [id]);

  return (
    <div>
      <Navbar />
      {/* <h1>Event Details</h1>
      {event && (
        <div>
          <h2>{event.title}</h2>
          <p>{event.subtitle}</p>
          <p>{event.description}</p>
          <p>{event.start_date}</p>
          <p>{event.duration}</p>
          <img src={event.cover_picture} alt="Capa do evento" />
          <p>{event.reward_amount}</p>
          <p>{event.submit_list}</p>
          <p>{event.id_tags}</p>
        </div>
      )} */}
    </div>
  );
}
