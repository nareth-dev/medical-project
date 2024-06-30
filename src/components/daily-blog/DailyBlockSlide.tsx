import { useState } from 'react';
import { Carousel } from 'flowbite-react';
import { CustomLeftArrow, CustomRightArrow } from '../slide-show/CustomArrowIcon';

const MyCarousel = () => {
  const [showControls, setShowControls] = useState(false); // Change to true if you want to show the controls initially

  return (
    <div className="bg-[#F2F2F2] !rounded-none overflow-hidden h-[640px] sm:h-[640px] xl:h-[640px] 2xl:h-[640px]">
      <Carousel
        leftControl={showControls && <CustomLeftArrow />}
        rightControl={showControls && <CustomRightArrow />}
        className="h-full !rounded-none"
      >
        {/* slide1 */}
        <div className="bg-green-400 w-full h-40"></div>
        {/* slide2 */}
        <div className="bg-yellow-300 w-full h-40"></div>
        {/* slide3 */}
        <div className="bg-indigo-500 w-full h-40"></div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
