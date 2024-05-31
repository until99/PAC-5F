import React from "react";
import { Link } from "react-router-dom";

interface CardMinifiedProps {
  cardId: string;
  coverImage: string;
  title: string;
  businessName: string;
  price: string;
  duration: string;
  qntParticipants: number;
  description: string;
}

export default function CardMinified({
  cardId,
  coverImage,
  title,
  businessName,
  price,
  duration,
  qntParticipants,
  description,
}: CardMinifiedProps) {
  return (
    <Link to={cardId} className="mt-8">
      <div className="rounded-2xl border-2 border-solid border-gray-200 p-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-1">
            <p className="text-xl font-bold">{title}</p>
            <p className="text-base font-medium">{businessName}</p>
          </div>
          <div className="flex h-24 w-24 justify-end">
            <img
              src={coverImage}
              alt="cover image"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col space-y-2 text-gray-600">
          <div className="flex flex-row justify-between">
            <p className="text-sm font-medium">{duration}</p>
            <p className="text-sm font-medium">
              <strong>{qntParticipants}</strong> participantes
            </p>
          </div>
          <p className="line-clamp-3 text-justify text-sm font-medium">
            {description}
          </p>
          <p className="line-clamp-1 pt-4 text-sm font-bold">{price}</p>
        </div>
      </div>
    </Link>
  );
}
