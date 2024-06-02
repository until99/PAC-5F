import { EllipsisVertical, Icon } from "lucide-react";
import { Link } from "react-router-dom";

interface CardListItemProps {
  id: number;
  imgLink: string;
}

export default function CardListItem({ id, imgLink }: CardListItemProps) {
  return (
    <Link
      to={`/events/${id}`}
      className="mt-12 flex w-[308px] flex-col rounded-xl border border-gray-400"
    >
      <div className="header-image max-h-[200px] w-full">
        {" "}
        {/* // TODO: Arrumar posicionamento das images */}
        <img className="max-h-[200px] rounded-t-xl" src={imgLink} alt="teste" />
      </div>
      <div className="card-body">
        <div className="card-title flex justify-between gap-4 p-4 pt-10">
          <h1 className="font-bold">
            Home Credit - Credit Risk Model Stability
          </h1>
          <EllipsisVertical />
        </div>
        <p className="mx-4 line-clamp-2 text-sm text-gray-500">
          Classificar convulsões e outros padrões de atividade cerebral
          prejudicial em pacientes gravemente enfermos
        </p>
        <hr className="my-4 border border-gray-300" />
        <div className="m-4 line-clamp-2 flex items-center justify-between">
          <p className="text-xl font-bold">R$ 999,99</p>
          <p className="text-base text-gray-500">2 meses atrás</p>
        </div>
      </div>
    </Link>
  );
}
