import { Link } from "react-router-dom";

export default function ParticipateSection() {
  return (
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
  );
}
