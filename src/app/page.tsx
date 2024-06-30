import CardInformation from "@/components/card-information/CardInformation";
import DailyBlog from "@/components/daily-blog/DailyBlog";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Logos from "@/components/logo-company/Logos";
import Navbar from "@/components/navbar/Navbar";
import PopularCategories from "@/components/popular/PopularCategories";
import PopularProducts from "@/components/popular/PopularProducts";
import SlideShow from "@/components/slide-show/SlideShow";
import React from "react";

interface Category {
  title: string;
  image: string;
}

interface Product {
  name: string;
  price: string;
  originalPrice: string;
  productType: string;
  image: string;
  rating: number;
  discount: number;
}

interface Blog {
  date: string;
  image: string;
  excerpt: string;
}

interface Logo {
  name: string;
  src: string;
  alt: string;
}

interface HomePageProps {
  categories: Category[];
  products: Product[];
  blogs: Blog[];
  logos: Logo[];
}

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/mock-data/");
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }
  const data = await res.json();
  return data;
}

const HomePage: React.FC = async () => {
  const { categories, products, blogs, logos } = await fetchData();

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 w-full">
      <main className="w-full">
        <div className="flex flex-col">
          <SlideShow />
          <Features />
          <PopularCategories categories={categories} />
          <PopularProducts products={products} />
          <CardInformation />
          <div className="mt-[100px]">
            <DailyBlog blogs={blogs} />
          </div>
          <Logos logos={logos} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
