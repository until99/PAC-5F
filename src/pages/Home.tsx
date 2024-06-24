import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Smile,
  Flag,
  Users,
  Search,
  Star,
  Clock,
  ArrowRight,
  Flame,
} from "lucide-react";
import { isUserValid, pb } from "@/lib/pocketbase";
import RegisterButton from "@/components/button/Register";
import LoginButton from "@/components/button/Login";
import { IEvent } from "@/interfaces/Event";

import Card from "@/components/card/Card";
import LandingPageCard from "@/components/card/LandingPageCard";

const accordionColapseItems = [
  {
    title: "Organizadores",
    content: "Simplifique a organização e gestão de eventos de programação.",
    image: "https://i.imgur.com/8fQm1rq.png",
    alt: "a boy carrying bags with a happy face print",
  },
  {
    title: "Programadores",
    content: "Deixe sua marca na comunidade de competições.",
    image: "https://i.imgur.com/pacw127.png",
    alt: "a girl in a scientist's coat dancing",
  },
  {
    title: "Empresas",
    content: "Sua marca vista em eventos de programação.",
    image: "https://i.imgur.com/qLQj0HB.png",
    alt: "a boy walking while playing with his electronic device",
  },
];

export default function Home() {
  const [active, setActive] = useState(false);
  const [events, setEvents] = useState<IEvent[]>([]);

  const revealAccordion = () => {
    setActive(!active);
  };

  const fetchEvents = async () => {
    try {
      const res = await pb.collection("TB_EVENTS").getList<IEvent>(1, 3, {
        sort: "-participants",
      });

      const eventsData = res.items.map((record) => ({
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

      setEvents(eventsData);
      console.log(eventsData);
      
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <div className="hero-section mt-32 flex items-center justify-between">
        <div className="title-wrapper">
          <h1 className="text-6xl font-bold leading-[72px] text-black">
            Onde a inovação
            <br />
            encontra a execução!
          </h1>
          <p className="pt-6 text-gray-600">
            Capacite seus eventos de programação com facilidade e precisão.
            <br />
            CodePraesto é a sua solução completa para organizar e avaliar
            <br />
            competições de codificação, hackathons e desafios de programação.
            <br />
          </p>
          {isUserValid ? (
            <></>
          ) : (
            <div className="hero-footer flex gap-4 pt-10">
              <RegisterButton />
              <LoginButton />
            </div>
          )}
        </div>
        <img
          src={"https://i.imgur.com/NfvU0aY.png"}
          alt="a image of two kids exploring eletronics"
          className="w-1/2"
        />
      </div>
      <div className="mt-48 grid grid-cols-3">
        {accordionColapseItems.map((item) => (
          <div className="mr-8 flex justify-between">
            <div className="w-2/3">
              <h2 className="mb-4 text-2xl font-bold">{item.title}</h2>
              <p className="mt-2 line-clamp-3 leading-relaxed text-gray-600">
                {item.content}
              </p>
            </div>
            <img src={item.image} alt={item.alt} />
          </div>
        ))}
        {active && (
          <>
            <div className="mb-12 mt-4 flex flex-col space-y-4">
              <p className="text-sm text-gray-400">recursos chave</p>
              <div className="flex space-x-4 text-gray-600">
                <Smile /> <p>Amigável para Iniciantes</p>
              </div>
              <div className="flex space-x-4 text-gray-600">
                <Flag /> <p>Competições</p>
              </div>
              <div className="flex space-x-4 text-gray-600">
                <Users /> <p>Comunidades Ativas</p>
              </div>
            </div>

            <div className="mb-12 mt-4 flex flex-col space-y-4">
              <p className="text-sm text-gray-400">recursos chave</p>
              <div className="flex space-x-4 text-gray-600">
                <Star /> <p>Dinâmico</p>
              </div>
              <div className="flex space-x-4 text-gray-600">
                <Search /> <p>Direto ao ponto</p>
              </div>
              <div className="flex space-x-4 text-gray-600">
                <Users /> <p>Engajamento</p>
              </div>
            </div>

            <div className="mb-12 mt-4 flex flex-col space-y-4">
              <p className="text-sm text-gray-400">recursos chave</p>
              <div className="flex space-x-4 text-gray-600">
                <Smile /> <p>Visibilidade</p>
              </div>
              <div className="flex space-x-4 text-gray-600">
                <Clock /> <p>Velocidade</p>
              </div>
              <div className="flex space-x-4 text-gray-600">
                <Users /> <p>Alcance</p>
              </div>
            </div>
          </>
        )}
      </div>
      {active ? (
        <button
          className="border-gray-250 flex rounded-3xl border-2 px-4 py-2 indent-2 text-base font-medium"
          onClick={revealAccordion}
        >
          <ChevronUp /> Veja Mais
        </button>
      ) : (
        <button
          className="border-gray-250 flex rounded-3xl border-2 px-4 py-2 indent-2 text-base font-medium"
          onClick={revealAccordion}
        >
          <ChevronDown /> Veja Mais
        </button>
      )}

      <div className="hero-section mt-32 flex items-end justify-between">
        <div className="title-wrapper">
          <h1 className="text-6xl font-bold leading-[72px] text-black">
            Participe de Hackatons
            <br /> com CodePraesto
          </h1>
          <p className="pt-6 text-gray-600">
            CodePraesto te possibilita inúmeras oportunidades para ganhar
            <br />
            experiência e se divertir participando dos mais variados Hackatons
            <br /> das mais diversas comunidades!
          </p>
        </div>
        <img
          src={"https://i.imgur.com/iqpRUJZ.png"}
          alt="a image of two kids exploring eletronics"
          className="w-1/3"
        />
      </div>

      <div className="mt-40">
        <div className="mb-4 mt-40 flex w-full flex-row items-center justify-between">
          <div className="flex flex-row space-x-2">
            <Flame className="h-6 w-6 stroke-2" />
            <p className="text-2xl font-bold">Populares</p>
          </div>
          <Link
            className="flex flex-row items-center space-x-2 font-bold hover:underline"
            to={"/events"}
          >
            <ArrowRight className="mr-2 h-6 w-6" />
            Ver mais
          </Link>
        </div>
        <div className="grid grid-cols-3 justify-items-center gap-6">
          {events.map((event) => (
            <LandingPageCard key={event.id} {...event} />
          ))}
            
        </div>
      </div>

      <div className="hero-section mt-32 flex items-center justify-between">
        <div className="title-wrapper">
          <h1 className="text-6xl font-bold leading-[72px] text-black">
            Organize seu próprio
            <br /> Hackaton com CodePraesto
          </h1>
          <p className="pt-6 text-gray-600">
            Com o CodePraesto você se tem os recursos necessários para
            <br />
            construir seu próprio evento na sua comunidade.
          </p>
        </div>
        <img
          src={"https://i.imgur.com/765nZAq.png"}
          alt="a image of two kids exploring eletronics"
          className="w-1/3"
        />
      </div>
    </>
  );
}
