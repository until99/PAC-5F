import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
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
        <div className="hero-footer flex gap-4 pt-10">
          <Link
            to={"/register"}
            className="rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md"
          >
            Registre-se
          </Link>
          <Link
            to={"/login"}
            className="rounded-full px-8 py-3 hover:bg-slate-100"
          >
            Entrar
          </Link>
        </div>
      </div>
      <img
        src={"https://i.imgur.com/NfvU0aY.png"}
        alt="a image of two kids exploring eletronics"
        className="w-1/2"
      />
    </div>
  );
}
