import React from "react";
import Image from "next/image";
import { Typography } from "../typhography/Typography";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { HiOutlineChevronDown } from "react-icons/hi";
import { InputAdornment, Select, Tab, Tabs, TextField } from "@mui/material";
import Link from "next/link";
import { Button } from "../button/Button";
import { GoHeart } from "react-icons/go";
import { PiHandbagLight, PiHandbagThin } from "react-icons/pi";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col w-full h-[190px] justify-between">
        {/* navbar 1 */}
        <div className="container flex justify-between">
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
          <div className="flex gap-5">
            <div className="flex gap-5 text-sm">
              <select className="border outline-none border-none">
                {/* <option selected></option> */}
                <option value="Eng">Eng</option>
                <option value="KH">Khm</option>
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
          <div className="flex h-[45px]">
            <div className="flex h-[45px] w-[496px]">
              <TextField
                fullWidth
                placeholder="Search"
                id="outlined-basic"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CiSearch size={20} />
                    </InputAdornment>
                  ),
                  sx: { height: 45 },
                }}
              />
              <Button width="w-[96px]" className="rounded-md">
                Search
              </Button>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <GoHeart size={32} color="#1A1A1A" />
            <div className="h-8 border-l-2"></div>
            {/* <PiHandbagThin className="w-[34px] h-[34px]" /> */}
            <Image src={"/svg/bag.svg"} alt="bag" width={34} height={34} />
            <div className="flex">
              <Typography fontSize="sm" className="text-[11px]" fontWeight="normal">
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
