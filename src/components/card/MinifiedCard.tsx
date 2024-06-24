import { IEvent } from "@/interfaces/Event";
import { Link } from "react-router-dom";

export default function MinifiedCard({
  id,
  title,
  cover_image,
  event_flags,
  reward,
  participants,
  started_date
}: IEvent) {
  return (
    <>
      <Link
        to={`/event/${id}`}
        className="card-list-min mt-8 flex w-full gap-8 rounded-lg "
      >
        <div className="img-wrapper h-28 w-28">
          <img
            src={`https://hell.pockethost.io/api/files/ee6o5jws39515n1/${id}/${cover_image}`}
            alt="cover-image"
            className="size-full rounded-lg"
          />
        </div>
        <div className="card-body flex flex-col justify-between">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-600">
            {event_flags} {reward !== 0 && <>- R$ {reward}</>}
          </p>
          <p className="text-gray-600">
            {participants} inscritos - {started_date}
          </p>
        </div>
      </Link>
      <hr className="mt-6 w-full border border-gray-300" />
    </>
  )
}