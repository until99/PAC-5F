export default function Footer() {
  return (
    <div className="bottom-0 flex flex-col py-8 pt-48">
      <div className="flex items-start justify-between">
        <div className="logo flex items-center gap-4">
          <img
            className="mb-3 w-20"
            src={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2FAnime-Logo-PNG-Transparent.png&f=1&nofb=1&ipt=82fa25ceeedd1dd66d8f904dd36a16d3f04be0f8604be5b5ae696c8c45316964&ipo=images"
            }
            alt="logo"
          />
          <p className="text-6xl font-bold">CodePraesto</p>
        </div>
        <div className="col-1 flex-col space-y-4">
          <p>
            <strong>Eventos</strong>
          </p>
          <ul className="flex-col space-y-4">
            <li>
              <a href="" className="cursor-pointer text-gray-600">
                Eventos
              </a>
            </li>
            <li>
              <a href="" className="cursor-pointer text-gray-600">
                Populares
              </a>
            </li>
            <li>
              <a href="" className="cursor-pointer text-gray-600">
                Organize
              </a>
            </li>
          </ul>
        </div>
        <div className="col-2 flex-col space-y-4">
          <p>
            <strong>Documentação</strong>
          </p>
          <ul className="flex-col space-y-4">
            <li>
              <a href="" className="cursor-pointer text-gray-600">
                Github
              </a>
            </li>
            <li>
              <a href="" className="cursor-pointer text-gray-600">
                Documents
              </a>
            </li>
            <li>
              <a href="" className="cursor-pointer text-gray-600">
                API
              </a>
            </li>
          </ul>
        </div>
        <div className="col-3 flex-col space-y-4">
          <p>
            <strong>Contato</strong>
          </p>
          <ul className="flex-col space-y-4">
            <li>
              <a href="" className="cursor-pointer text-gray-600">
                Time
              </a>
            </li>
            <li>
              <a href="" className="cursor-pointer text-gray-600">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="cursor-pointer text-gray-600">
                Contate-nos
              </a>
            </li>
            <li>
              <a href="" className="cursor-pointer text-gray-600">
                Termos · Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="self-center pt-16">© 2024 CodePraesto, Inc</p>
    </div>
  );
}
