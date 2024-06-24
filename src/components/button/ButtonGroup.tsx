// ButtonGroup.tsx
import React, { useEffect, useState } from "react";

type ButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <div className="flex flex-col items-center">
      <button className="px-4 pb-4" onClick={onClick}>
        {label}
      </button>
      {isActive && (
        <hr className="w-3/5 rounded-full border-2 border-gray-800" />
      )}
    </div>
  );
};

type ButtonGroupProps = {
  onButtonClick: (id: number) => void;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onButtonClick }) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  useEffect(() => {
    setActiveButton(1);
  }, []);

  const buttons = [
    { id: 1, label: "Organizados" },
    { id: 2, label: "Participando" },
  ];

  const handleClick = (id: number) => {
    setActiveButton(id);
    onButtonClick(id);
  };

  return (
    <div className="mt-12 flex space-x-4">
      {buttons.map((button) => (
        <Button
          key={button.id}
          label={button.label}
          isActive={activeButton === button.id}
          onClick={() => handleClick(button.id)}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
