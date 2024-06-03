import { List, Flame, Star, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";

export default function EventSearchTopicSection() {
  const eventFilterCards = [
    {
      title: "Todas as competições",
      icon: List,
      content: "Todos os eventos, passado e presente.",
      href: "/all-events",
    },
    {
      title: "Patrocinados",
      icon: Star,
      content: "Eventos patrocinados com prêmios.",
      href: "/",
    },
    {
      title: "Comunidades",
      icon: UsersRound,
      content: "Criadas pelos organizadores e participantes do CodePraesto.",
      href: "/",
    },
    {
      title: "Populares",
      icon: Flame,
      content: "Eventos em alta pela comunidade.",
      href: "/",
    },
  ];

  return (
    <div className="mt-32">
      <input
        type="text"
        className="w-full rounded-3xl border-2 border-solid border-gray-200 bg-magnifier bg-[length:1.25rem] bg-[0.75rem] bg-no-repeat px-4 py-2 indent-6 text-base outline-none placeholder:text-gray-800"
        placeholder="Procurar competições"
      />
      {/* <div className="mt-6 flex gap-6">
        {eventFilterCards.map((card, index) => (
          <Link
            key={index}
            to={card.href}
            className="max-w-[308px] cursor-pointer rounded-xl border border-solid border-gray-400 p-4"
          >
            <div className="flex justify-between gap-4">
              <p className="font-bold">{card.title}</p>
              <card.icon />
            </div>
            <p className="mt-4 text-gray-500">{card.content}</p>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
