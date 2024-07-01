import React from "react";
import Image from "next/image";
import { Typography } from "../typhography/Typography";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { InputAdornment, TextField } from "@mui/material";
import Link from "next/link";
import { Button } from "../button/Button";
import { GoHeart } from "react-icons/go";
import NavbarMenu from "./NavbarMenu";
import { MdKeyboardArrowRight } from "react-icons/md";
import FavouriteIcon from "../icons/FavouriteIcon";
import ShoppingBasketIcon from "../icons/ShoppingBasketIcon";
import MiddleNavbar from "./MiddleNavbar";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col w-full h-[190px] justify-between">
        {/* navbar 1 */}
        <div className="hidden w-full md:container h-[44px] md:flex items-center justify-between mx-auto">
          <div className="flex">
            <CiLocationOn width={15} height={18} />
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="ml-2 text-[#666666]"
            >
              Store Location: No.2A, Down Town Road No 7, Phum Kork
              Chambak,Phnom Penh
            </Typography>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex gap-5 text-sm">
              <select className="border outline-none border-none">
                <option value="Eng" className="text-[14px] font-normal">
                  Eng
                </option>
                <option value="Kh" className="text-[14px] font-normal">
                  Khm
                </option>
              </select>
            </div>
            <Link href={"#"}>
              <Typography fontSize="sm" className="ml-5 text-[#666666]">
                Sign In
              </Typography>
            </Link>
            <Link href={"#"}>
              <Typography fontSize="sm" className="text-[#666666]">
                Sign Up
              </Typography>
            </Link>
          </div>
        </div>
        {/* navbar 2 */}
        <MiddleNavbar/>
        {/* navbar3 */}
        <NavbarMenu />
      </div>
    </>
  );
};

export default Navbar;
