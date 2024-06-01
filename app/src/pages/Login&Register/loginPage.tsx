import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-grow items-center justify-center gap-32">
        <div className="left">
          <h1 className="text-6xl font-bold leading-[72px] text-black">
            Login
          </h1>
          <p className="pt-6 text-gray-600">
            Realize login para acessar as funcionalidades da Plataforma.
          </p>
        </div>
        <div className="right flex flex-col items-center gap-4">
          <input
            type="text"
            className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none placeholder:text-gray-600"
            placeholder="e-mail"
            required
          />
          <input
            type="text"
            className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none placeholder:text-gray-600"
            placeholder="senha"
            required
          />
          <Link
            to={"/login"}
            className="w-44 rounded-full bg-black px-8 py-3 font-bold text-white text-center hover:shadow-md"
            // onSubmit={}
          >
            Login
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
