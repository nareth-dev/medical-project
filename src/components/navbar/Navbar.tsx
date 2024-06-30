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

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col w-full h-[190px] justify-between">
        {/* navbar 1 */}
        <div className="border flex px-[140px] justify-between items-center">
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
        <div className="container h-[85px] flex items-center justify-between">
          <Image src="/svg/logo.svg" alt="Icon" width={40} height={40} />
          <div className="flex items-center">
            <div className="relative w-[496px]">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <CiSearch size={20} />
              </div>
              <input
                type="search"
                id="search-dropdown"
                className="block pl-12 pr-[24px] py-[14px] w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-lg border border-gray-300 focus:outline-none"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 px-[24px] py-[14px] text-sm font-medium h-full text-white bg-[#008001] rounded-r-lg"
              >
                <span>Search</span>
              </button>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <GoHeart size={32} color="#1A1A1A" />
            <div className="h-8 border-l-2"></div>
            <Image src={"/svg/bag.svg"} alt="bag" width={34} height={34} />
            <div className="flex">
              <Typography
                fontSize="xs"
                className="text-[11px]"
                fontWeight="normal"
              >
                Shopping cart:
              </Typography>
              <Typography fontSize="sm" fontWeight="bold" className="ml-2">
                $0
              </Typography>
            </div>
          </div>
        </div>
        {/* navbar3 */}
        <NavbarMenu />
      </div>
    </>
  );
};

export default Navbar;
