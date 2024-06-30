"use client";
import React, { useState } from "react";
import ShoppingBasketIcon from "../icons/ShoppingBasketIcon";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice: string;
  productType: string;
  image: string;
  rating: number;
  discount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  discount,
  productType,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => {
    setIsSelected(!isSelected);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-3 h-3 ${
            i <= rating ? "text-yellow-300" : "text-gray-300"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="p-4 border relative h-full w-full">
      {discount > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white h-[43.57px] w-[122.56px] flex items-center justify-center text-base font-bold px-2 py-1 rounded bg-red">
          Sale {discount}%
        </div>
      )}
      <img
        src={image}
        alt={name}
        className="mx-auto mb-4 w-[328.5px] h-[337.3px] object-cover"
      />

      <div className="flex items-center justify-between w-full">
        <div className="w-full flex items-start flex-col space-y-[4px]">
          <span className="text-sm font-medium text-[#4D4D4D]">
            {productType}
          </span>
          <h3 className="text-xl font-extrabold text-[#374151]">{name}</h3>
          <div className="flex items-center space-x-1">
            <span className="text-lg font-bold text-red-500">{price}</span>
            {discount > 0 && (
              <span className="text-sm line-through text-gray-500">
                {originalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mb-1">
            <span className="flex items-center">{renderStars(rating)}</span>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className={`p-[16px] rounded-full flex items-center justify-center ${
            isSelected
              ? "text-white bg-[#008001]"
              : "text-gray-700 bg-[#F2F2F2]"
          } hover:bg-[#008001] hover:text-white`}
        >
          <ShoppingBasketIcon className="w-[30px] h-[30px]" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
