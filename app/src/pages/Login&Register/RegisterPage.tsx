import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-grow items-center justify-center gap-32">
        <div className="left">
          <h1 className="text-6xl font-bold leading-[72px] text-black">
            Register
          </h1>
          <p className="pt-6 text-gray-600">
            Registre-se na plataforma para acessar as funcionalidades e <br />
            participar dos eventos!
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
            placeholder="username"
            required
          />
          <input
            type="text"
            className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none placeholder:text-gray-600"
            placeholder="senha"
            required
          />
          <Link
            to={"/register"}
            className="w-44 rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md"
            // onSubmit={}
          >
            Registre-se
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
