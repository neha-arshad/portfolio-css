import React from "react";

interface ButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-pink-950"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-4 font-bold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default Button;
