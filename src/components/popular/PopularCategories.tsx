import Image from "next/image";
import React from "react";
import { Typography } from "../typhography/Typography";
import { CiStar } from "react-icons/ci";
import Card from "./ProductCard";
import { IoIosArrowRoundForward } from "react-icons/io";
import CardCategory from "./CategoryCard";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import CategoryCard from "./CategoryCard";

interface Category {
  title: string;
  image: string;
}

interface PopularCategoriesProps {
  categories: Category[];
}

const PopularCategories: React.FC<PopularCategoriesProps> = ({
  categories,
}) => {
  console.log("categories", categories);
  return (
    <section className="w-full">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-between">
          <h2 className="text-[32px] font-semibold">Popular Categories</h2>
          <div className="flex items-center space-x-2 text-[#008001]">
            <h2 className="text-[16px] font-medium">View All</h2>
            <ArrowRightIcon />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-[32px]">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              isSelected={category.title === "Medical Tube"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
