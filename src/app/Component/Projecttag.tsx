import React from "react";

interface ProjectProp {
  name: any;
  onClick: (newTag: string) => void;
  isSelected: boolean;
  active: string | boolean;
}

const Projectag: React.FC<ProjectProp> = ({
  name,
  onClick,
  isSelected,
  active,
}) => {
  const buttonStyle = isSelected
    ? "text-white border-green-600"
    : "border-green-600 hover:border-pink-700";

  return (
    <button
      className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default Projectag;
