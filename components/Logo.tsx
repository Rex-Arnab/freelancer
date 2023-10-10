"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  width: number;
  height: number;
}

function Logo({ className = "", width, height }: LogoProps) {
  return (
    <Image
      src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg"
      alt="Freelancer"
      width={width}
      height={height}
      className={className}
    />
  );
}

export default Logo;
