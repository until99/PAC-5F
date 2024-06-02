import CardListMinItem from "@/layout/Cards/CardListMinItem";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";

import { Trophy } from "lucide-react";

export default function EventListGeneralPage() {
  return (
    <>
      <Navbar />

      <div className="mt-12 flex items-center gap-4">
        <Trophy size={"3rem"} />
        <h1 className="text-4xl font-bold">Competições</h1>
      </div>

      <input
        type="text"
        className="mt-24 w-full rounded-3xl border-2 border-solid border-gray-200 bg-magnifier bg-[length:1.25rem] bg-[0.75rem] bg-no-repeat px-4 py-2 indent-6 text-base outline-none placeholder:text-gray-800"
        placeholder="Procurar competições"
      />

      <h1 className="mt-12 text-2xl font-bold">Resultados</h1>

      <CardListMinItem
        id={1}
        title="Home Credit - Credit Risk Model Stability"
        eventType="Patrocinado"
        daysAfterStart={1}
        partipationsCount={38}
        rewardPrice={535.99}
        imgLink="https://i.pinimg.com/564x/e6/3e/5e/e63e5e790e382b4b76384475e7f3e8a0.jpg"
      />

      <Footer />
    </>
  );
}
