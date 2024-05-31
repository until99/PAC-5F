import React, { useState } from "react";

import {
  ChevronDown,
  ChevronUp,
  Smile,
  Flag,
  Users,
  Search,
  Star,
  Clock,
} from "lucide-react";

const Accordion = () => {
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

  const [active, setActive] = useState(false);

  const revealAccordion = () => {
    setActive(!active);
  };

  return (
    <>
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
    </>
  );
};

export default Accordion;
