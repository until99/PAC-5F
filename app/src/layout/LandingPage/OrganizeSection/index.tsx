import { Link } from "react-router-dom";

export default function ParticipateSection() {
  return (
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
  );
}
