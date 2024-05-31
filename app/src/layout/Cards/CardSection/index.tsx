import React from "react";
import { ArrowRight } from "lucide-react";

interface CardSectionProps {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

export default function CardSection({
  title,
  href,
  icon: Icon,
  children,
}: CardSectionProps) {
  return (
    <div className="mt-40">
      <div className="mt-40 flex w-full flex-row items-center justify-between">
        <div className="flex flex-row space-x-2">
          <Icon className="h-6 w-6 stroke-2" />
          <p className="text-2xl font-bold">{title}</p>
        </div>
        <a
          className="flex flex-row items-center space-x-2 font-bold hover:underline"
          href={href}
        >
          <ArrowRight className="mr-2 h-6 w-6" />
          Ver mais
        </a>
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-6">
        {children}
      </div>
    </div>
  );
}
