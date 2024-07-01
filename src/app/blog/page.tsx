"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/container/Container";
import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import FilterHorizontalIcon from "@/components/icons/FilterHorizontalIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import TopCategories from "@/components/top-categories/TopCategories";
import PopularTags from "@/components/popular-tags/PopularTags";
import Gallery from "@/components/gallery/Gallery";
import RecentlyAdded from "@/components/recent-add/RecentlyAdded";
import BlogCard from "@/components/block-card/BlogCard";
import Pagination from "@/components/pagination/Pagination";

const blogData = [
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Apr 25, 2021",
    image:
      "https://plus.unsplash.com/premium_photo-1673953510107-d5aee40d80a7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Apr 25, 2021",
    image:
      "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Apr 25, 2021",
    image:
      "https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Apr 25, 2021",
    image:
      "https://plus.unsplash.com/premium_photo-1676325101744-ce4a45a331c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Apr 25, 2021",
    image:
      "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Apr 25, 2021",
    image:
      "https://images.unsplash.com/photo-1641210444019-f61749d2951f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Apr 25, 2021",
    image:
      "https://images.unsplash.com/photo-1696858386015-22cea0760a14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Apr 25, 2021",
    image:
      "https://plus.unsplash.com/premium_photo-1664971883317-44091ea1b36b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Apr 25, 2021",
    image:
      "https://images.unsplash.com/photo-1702909171778-c4f2b22c1b14?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Apr 25, 2021",
    image:
      "https://plus.unsplash.com/premium_photo-1663844169550-7fa698a59231?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Apr 25, 2021",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Apr 25, 2021",
    image:
      "https://images.unsplash.com/photo-1631364918796-b5cf912d661d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Blog = () => {
  const resultsFound = 52; // Replace with dynamic data if necessary
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto flex flex-col items-center w-full mb-10">
      <Container>
        <div className="mb-8">
          <Breadcrumb />
        </div>
        <div className="flex items-center justify-between w-full mb-8">
          <button className="flex items-center space-x-2 rounded-full bg-[#008001] text-white px-[40px] py-[13.5px]">
            <span className="text-[16px] font-semibold">Filter</span>
            <FilterHorizontalIcon />
          </button>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-[16px]">Sort by:</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-500">
                  <option>Latest</option>
                  <option>Oldest</option>
                  <option>Most Popular</option>
                  <option>Least Popular</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <span className="text-gray-800 text-[16px] font-semibold">
            {resultsFound} Results Found
          </span>
        </div>

        <div className="flex items-start space-x-[20px]">
          <div className="w-[469px] flex flex-col items-start space-y-[20px]">
            {/* Search Input */}
            <div className="flex items-center">
              <div className="relative w-[469px]">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="search"
                  id="search-dropdown"
                  className="block pl-12 pr-[24px] py-[14px] w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-lg border border-gray-300 focus:outline-none"
                  placeholder="Search..."
                  required
                />
              </div>
            </div>
            <div className="bg-gray-200 w-full h-[1px]" />
            {/* Top Categories */}
            <TopCategories />
            <div className="bg-gray-200 w-full h-[1px]" />
            {/* Popular Tags */}
            <PopularTags />
            <div className="bg-gray-200 w-full h-[1px]" />
            {/* Our Gallery */}
            <Gallery />
            {/* Recently Added */}
            <RecentlyAdded />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentBlogs.map((blog, index) => (
              <Link href={`/blog/${index}`} key={index}>
                <BlogCard
                  title={blog.title}
                  date={blog.date}
                  image={blog.image}
                  excerpt={blog.excerpt}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-ful">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(blogData.length / blogsPerPage)}
            onPageChange={paginate}
          />
        </div>
      </Container>
    </div>
  );
};

export default Blog;
