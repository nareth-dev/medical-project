import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import Container from "@/components/container/Container";
import FeatureItem from "@/components/feature-item/FeatureItem";
import TeamCard from "@/components/team-card/TeamCard";
import CoreValueCard from "@/components/value-card/CoreValueCard";
import { Button } from "@mui/material";
import React from "react";
import { IoIosArrowRoundForward, IoIosCheckmark } from "react-icons/io";

const About: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col w-full space-y-[56px]">
      <Container>
        <Breadcrumb />
        {/* 100% Trusted */}
        <div className="w-full flex items-center space-x-[58px]">
          <div className="flex flex-col flex-1 items-start w-full space-y-[40px]">
            <span className="text-[52px] font-extrabold">
              100% Trusted Organic Food Store
            </span>
            <span className="text-[#666666] text-[18px] font-normal text-left">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </span>
          </div>
          <div className="flex flex-1 w-full">
            <img
              src="/images/about/about-01.png"
              alt="about-01"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </Container>
      {/* Mission */}
      <div className="flex items-center">
        <div className="w-full flex-1">
          <img
            src="/images/about/about-02.png"
            alt="about-02"
            className="object-cover h-[685px] w-[1015.51px]"
          />
        </div>
        <div className="flex flex-col px-[144px] flex-1 w-full items-start space-y-[20px]">
          <span className="text-[52px] font-extrabold">Mission</span>
          <span className="text-[16px] font-normal text-[#808080]">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.
          </span>
          <div className="flex items-center w-full space-x-[20px]">
            <div className="flex flex-col items-start space-y-[20px] w-full">
              <FeatureItem
                iconSrc="/images/about/Icon-1.png"
                title="100% Organic food"
                description="100% healthy & Fresh food."
              />
              <FeatureItem
                iconSrc="/images/about/Icon-2.png"
                title="Customer Feedback"
                description="Our happy customer"
              />
              <FeatureItem
                iconSrc="/images/about/Icon-4.png"
                title="Free Shipping"
                description="Free shipping with discount"
              />
            </div>
            <div className="flex flex-col items-start space-y-[20px] w-full">
              <FeatureItem
                iconSrc="/images/about/Icon-1.png"
                title="Great Support 24/7"
                description="Instant access to Contact"
              />
              <FeatureItem
                iconSrc="/images/about/Icon-3.png"
                title="100% Secure Payment"
                description="We ensure your money is safe"
              />
              <FeatureItem
                iconSrc="/images/about/Icon-5.png"
                title="100% Organic Food"
                description="100% healthy & Fresh food."
              />
            </div>
          </div>
        </div>
      </div>
      {/* Vision */}
      <div className="w-full flex">
        {/* describtion */}
        <div className="flex flex-col">
          <span className="text-[52px] font-extrabold mt-16">Vision</span>
          <span className="text-[18px] font-normal text-[#6B7280]">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </span>
          <hr className="my-4" />
          <div className="flex flex-col gap-2">
            <div className="flex space-x-2 items-center">
              <div className="bg-[#DEF7EC] flex w-[18px] h-[18px] items-center justify-center rounded-full">
                <IoIosCheckmark color="#0E9F6E" />
              </div>
              <span className="text-[16px] font-medium">
                Continuous integration and deployment
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="bg-[#DEF7EC] flex w-[18px] h-[18px] items-center justify-center rounded-full">
                <IoIosCheckmark color="#0E9F6E" />
              </div>
              <span className="text-[16px] font-medium">
                Development workflow
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="bg-[#DEF7EC] flex w-[18px] h-[18px] items-center justify-center rounded-full">
                <IoIosCheckmark color="#0E9F6E" />
              </div>
              <span className="text-[16px] font-medium">
                Knowledge management
              </span>
            </div>
            <Button
              variant="contained"
              className="bg-[#008001] hover:bg-[#00a400] w-[160px] h-[50px] text-[16px] rounded-full normal-case mt-5"
              endIcon={<IoIosArrowRoundForward size={24} />}
            >
              Shop Now
            </Button>
          </div>
          {/* picture */}
        </div>
        <div className="w-full h-auto">
          <div className="flex flex-1 w-full">
            <img
              src="/images/about/about-03.png"
              alt="about-01"
              className="object-cover rounded-lg w-[843px] h-[571px]"
            />
          </div>
        </div>
      </div>
      {/* Core value */}
      <CoreValueCard/>
      <TeamCard/>
    </div>
  );
};

export default About;
