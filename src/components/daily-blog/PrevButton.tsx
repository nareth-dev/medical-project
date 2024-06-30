import React from "react";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

interface IPrevButton {
  onClick?: () => void;
}

const PrevButton: React.FC<IPrevButton> = () => {
  return (
    <button className="text-gray-700 bg-[#F2F2F2] p-[10px] hover:bg-[#008001] hover:text-white rounded-full flex items-center justify-center">
      <ArrowLeftIcon className="w-[24px] h-[24px]" />
    </button>
  );
};

export default PrevButton;
