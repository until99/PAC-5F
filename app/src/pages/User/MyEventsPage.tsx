import React, { useEffect, useState } from "react";
import ButtonGroup from "@/components/ButtonGroup";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { Link } from "react-router-dom";
import Organized from "@/layout/User/EventList/Organized";
import Participating from "@/layout/User/EventList/Participating";

export default function MyEventsPage() {
  const [activeComponent, setActiveComponent] = useState<number | null>(null);

  useEffect(() => {
    setActiveComponent(1);
  }, []);

  const renderContent = () => {
    switch (activeComponent) {
      case 1:
        return <Organized />;
      case 2:
        return <Participating />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="header mt-12 flex flex-col gap-12">
        <h1 className="text-5xl font-bold">Seus eventos</h1>
        <Link
          to={"/organize"}
          className="w-fit rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md"
        >
          Novo Evento
        </Link>
      </div>

      <ButtonGroup onButtonClick={setActiveComponent} />

      <div className="event-list mt-12">{renderContent()}</div>
      <Footer />
    </>
  );
}
