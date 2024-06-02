import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { Link } from "react-router-dom";
import EventDetailSection from "../../layout/EventDetail/EventDetailSection";

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
    <>
      <Navbar />
      <div className="mt-12 flex items-center justify-between">
        <div className="left flex items-center gap-4 font-medium text-gray-700">
          <img
            className="h-12 w-12 rounded-full"
            src="https://i.pinimg.com/564x/ce/e6/a5/cee6a52094e58101246c1d44c70d4230.jpg"
            alt="user profile icon"
          />
          <p>THE IMORTALS</p>
          <span>-</span>
          <p>7 dias restantes</p>
        </div>
        <div className="right">
          <Link
            to={"/register"}
            className="rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md"
          >
            Juntar-se à competição
          </Link>
        </div>
      </div>
      <div className="mt-24 flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-gray-800">
            Steel Plate Defect Prediction
          </h1>
          <p className="mt-4 text-gray-500">Temporada 4, Episódio 3</p>
        </div>
        <div className="img-wrapper flex h-[200px] w-[320px] items-center justify-center overflow-hidden rounded-lg">
          <img
            className="w-full"
            src="https://i.pinimg.com/564x/47/f2/05/47f2052ecafc50946f90b8161b6f4ba6.jpg"
            // src="https://wallpapercave.com/wp/wp7473576.jpg"
            alt="event cover image"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="right w-2/3">
          <EventDetailSection
            title="Visão Geral"
            content="<strong>Bem-vindos ao The Immortals de 2024!</strong> Estamos animados
        para continuar no espírito das edições anteriores, fornecendo conjuntos
        de dados interessantes e acessíveis para nossa comunidade praticar suas
        habilidades em aprendizado de máquina, e esperamos uma competição a cada
        mês.
        <br />
        <br />
        <strong>Seu Objetivo:</strong> Prever a probabilidade de vários defeitos
        em placas de aço. Boa sorte!"
          />
          <EventDetailSection
            title="Arquivo de entrega"
            content="O nome do arquivo que será entregue deve possuir o seguinte formato: <br />
steel_plate_prediction-{data de entrega}-{nome da equipe}"
          />
          <EventDetailSection
            title="Prazos"
            content="
            <ul style='list-style-type: disc; margin-left: 1rem; gap: 0.75rem; display: flex; flex-direction: column;'>
              <li><strong>Data de Início</strong> - 1° de março de 2024</li>
              <li><strong>Data dee Finalização</strong> - 31 de março de 2024</li>
            </ul>

            <p style='margin-top: 2rem; font-size: 1rem'>Todos os prazos são às 23h59 UTC do dia correspondente, salvo indicação em contrário. Os organizadores da competição reservam-se o direito de atualizar o cronograma do concurso se considerarem necessário.</p>
          "
          />
        </div>
        <div className="left flex w-1/5  flex-col">
          <EventDetailSection title="Organizador" content="The Immortals" />
          <EventDetailSection title="Prêmios e Recompenças" content="$999.99" />
        </div>
      </div>
      <Footer />
    </>
  );
}
