import React from "react";

interface ProfileInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileInput: React.FC<ProfileInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="input-group flex flex-col gap-2">
      <label className="text-gray-700" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ProfileInput;
