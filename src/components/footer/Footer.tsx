import React from "react";
import { Button } from "../button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { Typography } from "../typhography/Typography";
import { BiLogoFacebook } from "react-icons/bi";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import PinterestIcon from "../icons/PinterestIcon";
import InstagramIcon from "../icons/InstagramIcon";

const Footer = () => {
  return (
    <>
      {/* top */}
      <div className="bg-gray10">
        <div className="container flex items-center h-[88px]">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-4">
              <Typography>Terms</Typography>
              <Typography>Privacy</Typography>
              <Typography>Cookies</Typography>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                <FacebookIcon className="w-6 h-6" />
              </button>
              <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                <TwitterIcon className="w-6 h-6" />
              </button>
              <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                <PinterestIcon className="w-6 h-6" />
              </button>
              <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                <InstagramIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      <footer
        className="bg-[#1A1A1A] w-full h-[405px] flex flex-col justify-center"
        style={{
          backgroundImage: `url('/images/footer-bg.png')`,
          backgroundSize: "cover",
        }}
      >
        <div className="container flex justify-between gap-[120px]">
          {/* Logo */}
          <div className="bg-green-400 flex flex-col w-[336px] h-[184px] gap-4">
            <Image src={"/svg/logo.svg"} alt="logo" width={40} height={40} />
            <Typography colorscheme="white">
              Address: No.2A, Down Town Road No 7, Phum Kork Chambak,Phnom Penh
            </Typography>
            <div className="flex gap-4">
              <Image
                src={"/svg/phone.svg"}
                alt="phone"
                width={10}
                height={16}
              />
              <Typography colorscheme="white">
                Office: (+855) 088 5654 093
              </Typography>
            </div>
            <div className="flex gap-2">
              <Image src={"/svg/mail.svg"} alt="phone" width={20} height={20} />
              <Typography colorscheme="white">
                Support: info@medi.com
              </Typography>
            </div>
          </div>
          {/* My Account */}
          <div className="bg-green-400 flex flex-col w-[116px] h-[160px] gap-3">
            <Typography colorscheme="white" className="mb-2">
              My Account
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              My Account
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Order History
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Shoping Cart
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Wishlist
            </Typography>
          </div>
          {/* Helps */}
          <div className="bg-green-400 flex flex-col w-[140px] h-[160px] gap-3">
            <Typography colorscheme="white" className="mb-2">
              Helps
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Contact
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Faqs
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Terms & Condition
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Privacy Policy
            </Typography>
          </div>
          {/* Proxy */}
          <div className="bg-green-400 flex flex-col w-[100px] h-[160px] gap-3">
            <Typography colorscheme="white" className="mb-2">
              Proxy
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              About
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Shop
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Product
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Track Order
            </Typography>
          </div>
          {/* Categories */}
          <div className="bg-green-400 flex flex-col w-[140px] h-[170px] gap-3">
            <Typography colorscheme="white" className="mb-2">
              Categories
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Fruit & Vegetables
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Meat & Fish
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Bread & Bakery
            </Typography>
            <Typography
              fontSize="sm"
              fontWeight="normal"
              className="text-[#999999]"
            >
              Beauty & Health
            </Typography>
          </div>
        </div>
        <hr className=" container border border-[#333333]" />
        <div className="container flex justify-center">
          <Typography className="text-[#808080] flex self-center">
            Developed by Digital Solution
          </Typography>
        </div>
      </footer>
    </>
  );
};

export default Footer;
