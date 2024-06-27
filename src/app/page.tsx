// import { Banner } from "@/components/Banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import SlideShow from "@/components/slide-show/Carousel ";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
// const slides = [
//   "https://i.ibb.co/ncrXc2V/1.png",
//   "https://i.ibb.co/B3s7v4h/2.png",
//   "https://i.ibb.co/XXR8kzF/3.png",
//   "https://i.ibb.co/yg7BSdM/4.png",
// ];
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
    </>
  );
}
