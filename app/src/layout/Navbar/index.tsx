import { Link } from "react-router-dom";

export default function Navbar() {
  let logoSize = "16";

  return (
    <nav className="flex items-center">
      <div className="flex items-center gap-4">
        <img
          className={`h-${logoSize} w-${logoSize}`}
          src={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2FAnime-Logo-PNG-Transparent.png&f=1&nofb=1&ipt=82fa25ceeedd1dd66d8f904dd36a16d3f04be0f8604be5b5ae696c8c45316964&ipo=images"
          }
          alt="teste"
        />
        <li className="flex items-center gap-4 font-medium text-slate-500">
          <Link to="/" className="hover:text-slate-600">
            Home
          </Link>
          <Link to="/events" className="hover:text-slate-600">
            Todos os Eventos
          </Link>
          <Link to="/organize" className="hover:text-slate-600">
            Organizar Evento
          </Link>
        </li>
      </div>
      <div>
        <input type="text" className="border-2 border-slate-500" />
        <button>entrar</button>
        <button>registrar-se</button>
      </div>
    </nav>
  );
}
