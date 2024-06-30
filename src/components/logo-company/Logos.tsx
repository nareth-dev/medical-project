import React from "react";

interface Logo {
  name: string;
  src: string;
  alt: string;
}

interface LogosProps {
  logos: Logo[];
}

const Logos: React.FC<LogosProps> = ({ logos }) => {
  return (
    <section className="bg-white w-full">
      <div className="container flex">
        <div className="container mx-auto flex justify-between items-center w-full">
          {logos.map((logo, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-center w-full max-w-[152px] h-[248px]">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {index !== logos.length - 1 && (
                <div className="h-8 mx-4 border-r border-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
