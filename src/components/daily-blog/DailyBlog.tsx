import React from "react";
import BlogCard from "../block-card/BlogCard";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

interface Blog {
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

interface DailyBlogProps {
  blogs: Blog[];
}

const DailyBlog: React.FC<DailyBlogProps> = ({ blogs }) => {
  return (
    <section className="w-full">
      <div className="container mx-auto text-center">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-8">Daily Blog</h2>
          <div className="flex items-center space-x-2">
            <PrevButton />
            <NextButton />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BlogCard
            title="blog"
            date="18 No"
            image="/images/blog1.png"
            excerpt="Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
          />
          <BlogCard
            title="blog2"
            date=""
            image="/images/blog2.png"
            excerpt="Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
          />
          <BlogCard
            title="blog2"
            date=""
            image="/images/blog3.png"
            excerpt="Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
          />
        </div>
      </div>
    </section>
  );
};

export default DailyBlog;
