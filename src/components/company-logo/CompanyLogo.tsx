import React from "react";
import Image from "next/image";

const companyLogos = [
  { src: "/svg/steps.svg", alt: "step company" },
  { src: "/svg/mango.svg", alt: "mango company" },
  { src: "/svg/food-network.svg", alt: "food network company" },
  { src: "/svg/food-co.svg", alt: "food co company" },
  { src: "/svg/book-of.svg", alt: "book-off company" },
  { src: "/svg/g-series.svg", alt: "gserise company" },
];

const CompaniesLogo = () => {
  return (
    <div className="container mx-auto p-2 md:p-0 mt-20">
      <div className="flex flex-wrap justify-between items-center w-full py-[20px] md:py-[60px]">
        {companyLogos.map((logo, index) => (
          <React.Fragment key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className="w-[60px] h-[24px] sm:w-[70px] sm:h-[28px] md:w-[82px] md:h-[32px] mb-4 md:mb-0"
            />
            {index < companyLogos.length - 1 && (
              <span className="hidden md:inline-block border h-6 text-[#E6E6E6]"></span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CompaniesLogo;
