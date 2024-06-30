import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import Container from "@/components/container/Container";
import FeatureItem from "@/components/feature-item/FeatureItem";
import React from "react";


const About: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col w-full space-y-[56px]">
      <Container>
        <Breadcrumb />
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
              src="/about/about-01.png"
              alt="about-01"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </Container>
      <div className="flex items-center">
        <div className="w-full flex-1">
          <img
            src="/about/about-02.png"
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
                iconSrc="/about/Icon.png"
                title="100% Organic food"
                description="100% healthy & Fresh food."
              />
              <FeatureItem
                iconSrc="/about/Icon-2.png"
                title="Customer Feedback"
                description="Our happy customer"
              />
              <FeatureItem
                iconSrc="/about/Icon-4.png"
                title="Free Shipping"
                description="Free shipping with discount"
              />
            </div>
            <div className="flex flex-col items-start space-y-[20px] w-full">
              <FeatureItem
                iconSrc="/about/Icon-1.png"
                title="Great Support 24/7"
                description="Instant access to Contact"
              />
              <FeatureItem
                iconSrc="/about/Icon-3.png"
                title="100% Secure Payment"
                description="We ensure your money is safe"
              />
              <FeatureItem
                iconSrc="/about/Icon-5.png"
                title="100% Organic Food"
                description="100% healthy & Fresh food."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
