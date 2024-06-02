import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";

import RegisterForm from "@/components/RegisterForm";

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
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
}
