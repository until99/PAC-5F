import { Link } from "react-router-dom";

interface CardListMinItemProps {
  id: number;
  imgLink: string;
}

export default function CardListMinItem({ imgLink, id }: CardListMinItemProps) {
  return (
    <>
      <Link
        to={`/events/${id}`}
        className="card-list-min mt-8 flex gap-8 rounded-lg"
      >
        <div className="img-wrapper h-28 w-28">
          <img
            src={imgLink}
            alt="cover-image"
            className="size-full rounded-lg"
          />
        </div>
        <div className="card-body flex flex-col justify-between">
          <h1 className="text-2xl font-bold">Steel Plate Defect Prediction</h1>
          <p className="text-gray-600">Patrocinada - $999.99</p>
          <p className="text-gray-600">1920 inscritos - 19 dias atrás</p>
        </div>
      </Link>
      <hr className="mt-6 border border-gray-300" />
    </>
  );
}
