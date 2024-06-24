import { signup } from "@/services/auth/signUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordConfim, setPasswordConfim] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (password !== passwordConfim) {
      window.alert("Passwords do not match");
      return;
    }
    try {
      await signup(username, email, password, passwordConfim);
      navigate("/login");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="flex flex-col py-64">
      <div className="flex flex-grow items-center gap-32">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold leading-[72px] text-black">
            Registre-se
          </h1>
          <p className="pt-6 text-gray-600">
            Registre-se na plataforma para acessar as funcionalidades e
            participar dos eventos!
          </p>
        </div>
        <div className="right flex flex-col items-center gap-4">
          <input
            type="text"
            className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none placeholder:text-gray-600"
            placeholder="usuário"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none placeholder:text-gray-600"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none placeholder:text-gray-600"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none placeholder:text-gray-600"
            placeholder="confirme a senha"
            onChange={(e) => setPasswordConfim(e.target.value)}
            required
          />
          <button
            className="w-44 rounded-full bg-black px-8 py-3 text-center font-bold text-white hover:shadow-md"
            onClick={handleSubmit}
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
}
