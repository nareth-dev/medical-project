"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "../icons/HomeIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumb" className="my-4 container mx-auto">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <HomeIcon />
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          return (
            <li key={href} className="flex items-center">
              <span className="mx-2 text-gray-500">
                <ChevronRightIcon />
              </span>
              <Link
                href={href}
                className={
                  isLast
                    ? "text-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }
              >
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
