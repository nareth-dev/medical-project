import React from "react";
import { Typography } from "../typhography/Typography";
import CountdownTimer from "./CountdownTimer";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button, ButtonBase, IconButton } from "@mui/material";

const CardInformation = () => {
  const targetDate = "2024-07-03T13:21:24";
  return (
    <>
      <div className="container flex flex-wrap justify-between gap-2">
        {/* car sale for this month */}
        <div
          className="border flex flex-col w-[480px] h-[570px] items-center rounded-md"
          style={{
            backgroundImage: `url('svg/sale-month.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col gap-8 items-center mt-10">
            <Typography fontSize="sm" fontWeight="normal">
              Best Deals
            </Typography>
            <Typography fontSize="4xl" fontWeight="bold">
              Sale of the Month
            </Typography>
            <CountdownTimer targetDate={targetDate} />
            <Button
              variant="contained"
              className="bg-[#008001] hover:bg-[#00a400] w-[190px] h-[50px] text-[16px] rounded-full normal-case"
              endIcon={<IoIosArrowRoundForward size={24} />}
            >
              Shop Now
            </Button>
          </div>
        </div>
        {/* Materials Doctor */}
        <div
          className="border border-green-400 flex flex-col w-[480px] h-[570px] items-center rounded-md"
          style={{
            backgroundImage: `url('svg/materials-doctor.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col gap-8 items-center mt-10">
            <Typography colorscheme="white" fontSize="sm" fontWeight="normal">
              New products
            </Typography>
            <Typography colorscheme="white" fontSize="4xl" fontWeight="bold">
              Materials Doctor
            </Typography>
            <div className="flex gap-2">
              <Typography fontSize="lg" fontWeight="normal">
                Started at
              </Typography>
              <Typography
                fontSize="xl"
                fontWeight="semibold"
                className="text-[#D82525]"
              >
                $79.99
              </Typography>
            </div>
            <Button
              variant="contained"
              className="bg-[#008001] hover:bg-[#00a400] w-[190px] h-[50px] text-[16px] rounded-full normal-case"
              endIcon={<IoIosArrowRoundForward size={24} />}
            >
              Shop Now
            </Button>
          </div>
        </div>
        {/* Discount */}
        <div
          className="border border-green-400 flex flex-col w-[480px] h-[570px] items-center rounded-md"
          style={{
            backgroundImage: `url('svg/discount.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col gap-8 items-center mt-10">
            <Typography fontSize="sm" fontWeight="normal">
              Summer Sale
            </Typography>
            <Typography fontSize="4xl" fontWeight="bold">
              Discount
            </Typography>
            <div className="flex gap-2">
              <Typography fontSize="lg" fontWeight="normal">
                Up to
              </Typography>
              <div className="bg-[#1A1A1A] w-[103px] h-[40px] flex justify-center items-center rounded-md">
                <Typography
                  fontSize="lg"
                  fontWeight="extrabold"
                  className="text-[#FCC900]"
                >
                  64% OFF
                </Typography>
              </div>
            </div>
            <Button
              variant="contained"
              className="bg-[#008001] hover:bg-[#00a400] w-[190px] h-[50px] text-[16px] rounded-full normal-case"
              endIcon={<IoIosArrowRoundForward size={24} />}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardInformation;
