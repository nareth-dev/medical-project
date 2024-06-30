import { MouseEventHandler } from "react";
import { IoArrowForwardOutline, IoArrowBack } from "react-icons/io5";

interface ArrowProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export function CustomLeftArrow({ onClick, className }: ArrowProps) {
  return (
    <div>
      <span
        className={`absolute left-40 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 border border-[#E6E6E6] ${className}`}
        onClick={onClick}
      >
        <IoArrowBack size={20} />
      </span>
    </div>
  );
}

export function CustomRightArrow({ onClick, className }: ArrowProps) {
  return (
    <div>
      <span
        className={`absolute right-40 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 border border-[#E6E6E6] ${className}`}
        onClick={onClick}
      >
        <IoArrowForwardOutline size={16} />
      </span>
    </div>
  );
}
