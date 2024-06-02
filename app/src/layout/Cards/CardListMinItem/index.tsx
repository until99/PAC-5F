import { Link } from "react-router-dom";

interface CardListMinItemProps {
  id: number;
  imgLink: string;
  title: string;
  eventType: string;
  rewardPrice: number;
  partipationsCount: number;
  daysAfterStart: number;
}

export default function CardListMinItem({
  id,
  imgLink,
  title,
  eventType,
  rewardPrice,
  partipationsCount,
  daysAfterStart,
}: CardListMinItemProps) {
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
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-600">
            {eventType} {rewardPrice !== 0 && <>- R$ {rewardPrice}</>}
          </p>
          <p className="text-gray-600">
            {partipationsCount} inscritos - {daysAfterStart} dias atrás
          </p>
        </div>
      </Link>
      <hr className="mt-6 border border-gray-300" />
    </>
  );
}
