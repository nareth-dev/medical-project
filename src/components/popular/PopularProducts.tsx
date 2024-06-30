import React from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  price: string;
  originalPrice: string;
  productType: string;
  image: string;
  rating: number;
  discount: number;
}

interface PopularProductsProps {
  products: Product[];
}

const PopularProducts: React.FC<PopularProductsProps> = ({ products }) => {
  return (
    <section className="w-full py-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-between">
            <h2 className="text-[32px] font-semibold">Popular Products</h2>
            <div className="flex items-center space-x-2 text-[#008001]">
              <h2 className="text-[16px] font-medium">View All</h2>
              <ArrowRightIcon />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[32px]">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                productType={product.productType}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                rating={product.rating}
                discount={product.discount}
              />
            ))}
          </div>
        </div>
    </section>
  );
};

export default PopularProducts;
