import Navbar from "@/layout/Navbar";
import HeroSection from "@/layout/LandingPage/HeroSection";
import Accordion from "@/layout/LandingPage/Accordion";
import ParticipateSection from "@/layout/LandingPage/ParticipateSection";
import OrganizeSection from "@/layout/LandingPage/OrganizeSection";
import CardSection from "@/layout/Cards/CardSection";
import CardMinified from "@/layout/Cards/CardMinified";

import { Flame } from "lucide-react";
import Footer from "@/layout/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <HeroSection />
      <Accordion />
      <ParticipateSection />

      <CardSection title="Populares" href={"/test"} icon={Flame}>
        <CardMinified
          title={"HackTech 2024"}
          businessName={"Tech Innovations Ltda."}
          coverImage={"https://i.imgur.com/dD4cDWV.png"}
          duration={"10 de abril - 12 de abril"}
          qntParticipants={200}
          description={
            "Desafio de programação de 48 horas para criar soluções inovadoras usando tecnologias de ponta."
          }
          cardId={"/1"}
          price={"R$ 10.000,00"}
        />

        <CardMinified
          title={"CodeFrenzy"}
          businessName={"DevLeague"}
          coverImage={"https://i.imgur.com/3tZvFxK.jpeg"}
          duration={"25 de abril - 26 de abril"}
          qntParticipants={50}
          description={
            "Maratona de codificação de 24 horas para resolver problemas de alta complexidade e desenvolver projetos criativos."
          }
          cardId={"/2"}
          price={"R$ 5.000 em dinheiro e oportunidade de estágio na DevLeague."}
        />

        <CardMinified
          title={"TechSprint"}
          businessName={"InnovateX"}
          coverImage={"https://i.imgur.com/DfmNsa2.png"}
          duration={"15 de junho - 17 de junho"}
          qntParticipants={800}
          description={
            "Hackaton de fim de semana para desenvolver soluções disruptivas nas áreas de inteligência artificial, IoT e blockchain."
          }
          cardId={"/3"}
          price={
            "R$ 15.000 em prêmios e mentoria para desenvolvimento do projeto vencedor."
          }
        />
      </CardSection>

      <OrganizeSection />
      <Footer />
    </div>
  );
}
