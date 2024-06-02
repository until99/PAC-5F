import { useState } from "react";

interface EventDetailSectionProps {
  title: string;
  content: string;
}

export default function EventDetailSection({
  title,
  content,
}: EventDetailSectionProps) {
  return (
    <>
      <h1 className="mt-12 text-2xl font-bold text-gray-800">{title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="mt-6 text-gray-800"
      ></div>
    </>
  );
}
