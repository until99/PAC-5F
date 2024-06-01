import React, { useState } from "react";
import api from "@/services/api";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post("/register", { name, email, password });
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form
      className="right flex flex-col items-center gap-4"
      onSubmit={handleRegister}
    >
      <input
        className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none placeholder:text-gray-600"
        placeholder="e-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none placeholder:text-gray-600"
        placeholder="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="password"
        className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none placeholder:text-gray-600"
        placeholder="senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="submit"
        className="w-44 rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md"
        value="Register"
      />
    </form>
  );
};

export default RegisterForm;