import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <div className="flex items-center gap-4">
        <img
          className="mb-3 w-20"
          src={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2FAnime-Logo-PNG-Transparent.png&f=1&nofb=1&ipt=82fa25ceeedd1dd66d8f904dd36a16d3f04be0f8604be5b5ae696c8c45316964&ipo=images"
          }
          alt="logo"
        />
        <li className="flex items-center gap-4 font-medium text-gray-500">
          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link to="/events" className="hover:text-gray-600">
            Todos os Eventos
          </Link>
          <Link to="/organize" className="hover:text-gray-600">
            Organizar Evento
          </Link>
          <Link to="/my-events" className="hover:text-gray-600">
            Meus Eventos
          </Link>
          <Link to="/profile" className="hover:text-gray-600">
            Profile
          </Link>
        </li>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="text"
          className="rounded-3xl border-2 border-solid border-gray-200 bg-magnifier bg-[length:1.25rem] bg-[0.75rem] bg-no-repeat px-4 py-2 indent-6 text-base outline-none"
          placeholder="Procurar"
        />
        <Link
          to={"/login"}
          className="rounded-full px-8 py-3 hover:bg-slate-100"
        >
          Entrar
        </Link>
        <Link
          to={"/register"}
          className="rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md"
        >
          Registre-se
        </Link>
      </div>
    </nav>
  );
}
