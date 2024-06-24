import { Link } from "react-router-dom";

export default function LandingPageCard({
  id,
  title,
  subtitle,
  cover_image,
  organizer,
  reward,
  started_date,
  finish_date,
  participants,
}: any) {
  return (
    <Link to={`event/${id}`} className="mt-8">
      <div className="h-[280px] w-[500px] rounded-2xl border-2 border-solid border-gray-200 p-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-1">
            <p className="text-xl font-bold">{title}</p>
            <p className="text-base font-medium">{organizer}</p>
          </div>
          <div className="flex h-24 w-24 justify-end">
            <img
              src={`https://hell.pockethost.io/api/files/ee6o5jws39515n1/${id}/${cover_image}`}
              alt="cover image"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="mt-6 flex h-1/2 flex-col justify-between text-gray-600">
          <div className="flex flex-row justify-between">
            <p className="text-sm font-medium">
              {new Date(finish_date).toLocaleDateString()} -{" "}
              {new Date(started_date).toLocaleDateString()}
            </p>
            <p className="text-sm font-medium">
              <strong>{participants}</strong> participantes
            </p>
          </div>

          <p className="line-clamp-3 text-justify text-sm font-medium">
            {subtitle}
          </p>

          <p className="line-clamp-1 pt-4 text-sm font-bold">R$ {reward}</p>
        </div>
      </div>
    </Link>
  );
}
