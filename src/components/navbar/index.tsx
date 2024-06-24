import { isUserValid, pb } from "@/lib/pocketbase";

import LoginButton from "../button/Login";
import RegisterButton from "../button/Register";
import { Link } from "react-router-dom";
import { signout } from "@/services/auth/signOut";

export default function Navbar() {
  return (
    <>
      {!isUserValid ? (
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-5xl">
            <img
              className="w-20"
              draggable="false"
              src="https://i.imgur.com/0w2UNdr.jpeg"
              alt="CodePraesto logo"
            />
          </Link>

          <div className="flex gap-4">
            <LoginButton />
            <RegisterButton />
          </div>
        </nav>
      ) : (
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-5xl">
              <img
                className="w-20"
                draggable="false"
                src="https://i.imgur.com/0w2UNdr.jpeg"
                alt="CodePraesto logo"
              />
            </Link>

            <li className="mt-2 flex gap-4 font-medium text-gray-500">
              <Link to="/" className="hover:text-gray-600">
                Home
              </Link>

              <Link to="/events" className="hover:text-gray-600">
                Todos os Eventos
              </Link>
            </li>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="h-fit rounded-full px-8 py-3 hover:bg-slate-100"
              onClick={() => signout()}
            >
              Log Out
            </button>
            <Link to={`/profile/${pb.authStore.model?.id}`} className="mt-2">
              {pb.authStore.model?.avatar ? (
                <img
                  src={`https://hell.pockethost.io/api/files/_pb_users_auth_/${pb.authStore.model?.id}/${pb.authStore.model?.avatar}`}
                  className="w-16 h-16 rounded-full border-4 border-gray-300"
                  alt="avatar"
                />
              ) : (
                <img
                  src={
                    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fdefault-user-icon%2Fdefault-user-icon-13.jpg&f=1&nofb=1&ipt=9b27efaa4a08d11ac7d8ea4730e737ab840c75085d4c09d7d9e30bcf00ce291d&ipo=images"
                  }
                  className="w-16 rounded-full border-4 border-gray-300"
                  alt="avatar"
                />
              )}
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
