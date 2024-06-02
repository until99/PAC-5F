import CardListMinItem from "@/layout/Cards/CardListMinItem";

export default function Organized() {
  return (
    <div>
      <input
        type="text"
        className="w-full rounded-3xl border-2 border-solid border-gray-200 bg-magnifier bg-[length:1.25rem] bg-[0.75rem] bg-no-repeat px-4 py-2 indent-6 text-base outline-none placeholder:text-gray-800"
        placeholder="Procurar competições"
      />
      <CardListMinItem
        id={1}
        title={"Mania de LLM - março de 2024"}
        eventType={"Comunidade"}
        rewardPrice={999.99}
        partipationsCount={1241}
        daysAfterStart={14}
        imgLink={
          "https://i.pinimg.com/564x/9f/15/6f/9f156f1820e5970fcb4ed6194680b590.jpg"
        }
      />
    </div>
  );
}
