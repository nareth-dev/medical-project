import React from "react";

interface CategoryCardProps {
  title: string;
  image: string;
  isSelected?: boolean; // Optional prop to handle selected state
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  
  title,
  image,
  isSelected,
}) => {
  return (
    <div
      className={`p-4 border ${
        isSelected ? "border-green-500" : "border-gray-300"
      } rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
    >
      <img
        src={image}
        alt={title}
        className="mx-auto mb-4 w-[176px] h-[160px] object-contain"
      />
      <p className="text-center">{title}</p>
    </div>
  );
};

export default CategoryCard;
