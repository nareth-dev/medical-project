"use client";

import React, { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right" | "justify";
  fontSize?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  fontWeight?:
    | "normal"
    | "medium"
    | "bold"
    | "semibold"
    | "extrabold"
    | "black";
  colorscheme?:
    | "primary"
    | "secondary"
    | "white"
    | "ornage"
    | "ornage"
    | "yellow"
    | "red"; // Corrected prop name
  tags?: "h1" | "p" | "h4";
  id?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  align = "left",
  fontSize = "base",
  fontWeight = "medium",
  colorscheme = "", // Corrected prop name
  tags = "p",
  id,
}) => {
  const typographyAlign = (align: string) => {
    switch (align) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "justify":
        return "text-justify";
      default:
        return "text-left"; // Added return statement
    }
  };

  const typographyFontSize = (fontSize: string) => {
    switch (fontSize) {
      case "xs":
        return "text-xs"; //12px
      case "sm":
        return "text-sm"; //14px
      case "base":
        return "text-base"; //16px
      case "md":
        return "text-[15px]"; //15px
      case "lg":
        return "text-lg"; //18px
      case "xl":
        return "text-xl"; //20px
      case "2xl":
        return "text-2xl"; //24px
      case "3xl":
        return "text-[32px]"; //32px
      case "4xl":
        return "text-[40px]"; //40px
      case "5xl":
        return "text-[52px]"; //52px
      default:
        return "text-base"; //16px
    }
  };

  const typographyfontWeight = (fontWeight: string) => {
    switch (fontWeight) {
      case "normal": //400
        return "font-normal";
      case "medium":
        return "font-medium"; //500
      case "semibold":
        return "font-semibold"; //600
      case "bold":
        return "font-bold	"; //700
      case "extrabold":
        return "font-extrabold"; //800
      case "black":
        return "font-black"; //900
      default:
        return "medium";
    }
  };

  const typographyColorScheme = (color: string) => {
    switch (color) {
      case "primary":
        return "text-[#2C742F]";
      case "secondary":
        return "text-[#2C742F]";
      case "white":
        return "text-white";
      case "red":
        return "text-[#D82525]";
      case "ornage":
        return "text-[#FF8A00]";
      case "yellow":
        return "text-[#FCC900]";
      default:
        return "text-[#000000]";
    }
  };

  const typographyAlignStyles = typographyAlign(align);
  const typographyFontSizeStyles = typographyFontSize(fontSize);
  const typographyfontWeightStyles = typographyfontWeight(fontWeight);
  const typographyColorStyles = typographyColorScheme(colorscheme);

  return (
    <>
      {tags === "h1" ? (
        <h1
          className={`${typographyColorStyles} ${typographyfontWeightStyles} ${typographyFontSizeStyles} ${typographyAlignStyles} ${className}`}
        >
          {children}
        </h1>
      ) : tags === "h4" ? (
        <h4
          className={`${typographyColorStyles} ${typographyfontWeightStyles} ${typographyFontSizeStyles} ${typographyAlignStyles} ${className}`}
        >
          {children}
        </h4>
      ) : (
        <p
          className={`${typographyColorStyles} ${typographyfontWeightStyles} ${typographyFontSizeStyles} ${typographyAlignStyles} ${className}`}
          id={id}
        >
          {children}
        </p>
      )}
    </>
  );
};

export { Typography };
