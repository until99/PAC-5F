import { Link } from "react-router-dom";

export default function EventSection() {
  return (
    <div className="hero-section mt-32 flex items-center justify-between">
      <div className="title-wrapper">
        <h1 className="text-6xl font-bold leading-[72px] text-black">
          Eventos
        </h1>
        <p className="pt-6 text-gray-600">
          Aumente suas habilidades e crie conexões valiosas exercitando sua{" "}
          <br />
          mente com competições e eventos.
        </p>
        <div className="hero-footer flex gap-4 pt-10">
          <Link
            to={"/register"}
            className="rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md"
          >
            Organize um evento
          </Link>
        </div>
      </div>
      <img
        src={"https://i.imgur.com/65nKFRo.png"}
        alt="a girl with mechanic arm doing a pose"
        className="w-1/2"
      />
    </div>
  );
}
