import { IEvent } from "@/interfaces/Event";
import { EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";

export default function Card({
  id,
  title,
  subtitle,
  cover_image,
  reward,
  started_date,
}: IEvent) {
  return (
    <Link
      to={`/event/${id}`}
      className="ml-8 mt-12 flex flex-col rounded-xl border border-gray-400 hover:shadow-lg"
    >
      <div className="header-image flex max-h-[200px] w-full items-center justify-center overflow-hidden rounded-t-xl">
        <img
          className="w-full"
          src={`https://hell.pockethost.io/api/files/ee6o5jws39515n1/${id}/${cover_image}`}
          alt={title}
        />
      </div>
      <div className="card-body">
        <div className="h-32">
          <div className="card-title flex justify-between gap-4 px-4 py-6">
            <h1 className="text-xl font-bold">{title}</h1>
          </div>

          <p className="mx-4 line-clamp-2 text-sm text-gray-500">{subtitle}</p>
        </div>

        <hr className="my-4 border border-gray-300" />

        <div className="m-4 line-clamp-2 flex items-center justify-between">
          <p className="text-xl font-bold">R$ {reward}</p>
          <p className="text-base text-gray-500">{started_date}</p>
        </div>
      </div>
    </Link>
  );
}
