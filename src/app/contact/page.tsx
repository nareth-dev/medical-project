import FormCatact from "@/components/form-contact/FormCantact";
import { Metadata } from "next";
import React from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export const metadata: Metadata = {
  title: "Contact Us",
};

const AboutUs = () => {
  return (
    <>
      <div className="w-full lg:container mx-auto h-full mb-10">
        <div className="flex items-center py-6">
          <GoHome className="w-6 h-6 text-gray-500" />
          <IoIosArrowForward className="w-4 h-4 text-gray-500 ml-1 md:ml-2" />
          <p className="text-primary ml-2">Contact Us</p>
        </div>
        <FormCatact />
      </div>
      {/* map */}
      <div className="w-full h-[400px] mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.8796531764565!2d104.91016957452692!3d11.560484244243687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951a468ba8a39%3A0xe0d54e8e5e596bcc!2z4Z6V4Z-S4Z6f4Z624Z6a4Z6R4Z-G4Z6T4Z6-4Z6UIOGeouGevOGeoeGetuGfhuGeluGfkuGemeGetg!5e0!3m2!1skm!2skh!4v1719767922111!5m2!1skm!2skh"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default AboutUs;



