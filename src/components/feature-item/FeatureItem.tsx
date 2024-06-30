import React from "react";

interface FeatureItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className="flex items-center space-x-[10px]">
      <img src={iconSrc} alt="Icon" className="object-cover" />
      <div className="flex flex-col items-start space-y-[10px]">
        <span className="text-[#1A1A1A] text-[18px] font-medium">{title}</span>
        <span className="text-[#808080] font-normal text-[14px]">
          {description}
        </span>
      </div>
    </div>
  );
};

export default FeatureItem;
