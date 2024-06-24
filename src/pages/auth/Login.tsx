import { signIn } from "@/services/auth/signIn";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!username || !password) {
      window.alert("Invalid Login credentials");
      return;
    }
    try {
      await signIn(username, password);
    } catch (error) {
      window.alert("Invalid login credentials");
      window.location.replace("/signup");
    }
  };

  return (
    <div className="flex py-64 flex-col">
      <div className="flex flex-grow items-center gap-32">
        <div className="w-1/2">
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
            placeholder="usuário"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none placeholder:text-gray-600"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="w-44 rounded-full bg-black px-8 py-3 text-center font-bold text-white hover:shadow-md"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
