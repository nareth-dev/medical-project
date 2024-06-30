import React from "react";
import Image from "next/image";
import { Typography } from "../typhography/Typography";

const Features = () => {
  return (
    <>
      <div className="container flex flex-wrap h-[224px] gap-y-8 justify-between">
        {/* car */}
        <div className="flex flex-col w-[250px] h-[224px] justify-center items-center">
          <Image src={"/svg/car.svg"} alt="bag" width={72} height={72} />
          <Typography fontSize="lg" fontWeight="semibold">
            Free Shipping
          </Typography>
          <Typography fontSize="sm" fontWeight="normal">
            Free Shipping
          </Typography>
        </div>
        {/* hendset */}
        <div className="flex flex-col w-[250px] h-[224px] justify-center items-center">
          <Image src={"/svg/headset.svg"} alt="bag" width={72} height={72} />
          <Typography fontSize="lg" fontWeight="semibold">
            Free Shipping
          </Typography>
          <Typography fontSize="sm" fontWeight="normal">
            Free Shipping
          </Typography>
        </div>
        {/* money bag */}
        <div className="flex flex-col w-[250px] h-[224px] justify-center items-center">
          <Image src={"/svg//money-bag.svg"} alt="bag" width={72} height={72} />
          <Typography fontSize="lg" fontWeight="semibold">
            Free Shipping
          </Typography>
          <Typography fontSize="sm" fontWeight="normal">
            Free Shipping
          </Typography>
        </div>
        {/* money guarantee */}
        <div className="flex flex-col w-[250px] h-[224px] justify-center items-center">
          <Image src={"/svg/money-guarantee.svg"} alt="bag" width={72} height={72} />
          <Typography fontSize="lg" fontWeight="semibold">
            Free Shipping
          </Typography>
          <Typography fontSize="sm" fontWeight="normal">
            Free Shipping
          </Typography>
        </div>
      </div>
    </>
  );
};
export default Features;
