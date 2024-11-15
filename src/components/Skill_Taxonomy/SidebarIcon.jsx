import React from "react";

export default function SkillSidebarIcon({ icon, value, index, setIndex, isHovered, name }) {
  const handleClick = () => {
    setIndex(value); 
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full flex items-center justify-center space-x-2 cursor-pointer p-2 m-2 rounded-md ${
        index === value ? "bg-blue-100" : ""
      }`}
    >
      <div className="flex items-center justify-center">
        {icon}
      </div>
      {isHovered && (
        <span className="text-sm font-medium text-gray-700">{name}</span>
      )}
      {index === value && (
        <div className="w-1 h-6 bg-blue-500 rounded-md" />
      )}
    </div>
  );
}
