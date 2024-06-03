// CardListItem.tsx
import { EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";

interface CardListItemProps {
  id: string; // Adicionado id à interface
  imgLink: string;
  title: string;
  subtitle: string;
  reward: number;
  startedDate: string;
}

export default function CardListItem({
  id, // Adicionado id como uma propriedade
  imgLink,
  title,
  subtitle,
  reward,
  startedDate,
}: CardListItemProps) {
  return (
    <Link
      to={`/events/${id}`}
      className="mt-12 flex flex-col rounded-xl border border-gray-400 hover:shadow-lg ml-8"
    >
      <div className="header-image flex max-h-[200px] w-full items-center justify-center overflow-hidden rounded-t-xl">
        <img className="w-full" src={imgLink} alt={title} />
      </div>
      <div className="card-body">
        <div className="card-title flex justify-between gap-4 p-4 pt-10">
          <h1 className="font-bold">{title}</h1>
          <EllipsisVertical />
        </div>
        <p className="mx-4 line-clamp-2 text-sm text-gray-500">{subtitle}</p>
        <hr className="my-4 border border-gray-300" />
        <div className="m-4 line-clamp-2 flex items-center justify-between">
          <p className="text-xl font-bold">R$ {reward.toFixed(2)}</p>
          <p className="text-base text-gray-500">{startedDate}</p>
        </div>
      </div>
    </Link>
  );
}
