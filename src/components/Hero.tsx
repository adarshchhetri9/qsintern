import React from "react";
import Image from "next/image";
import { cd, cdblack, hero } from "../../public/assets";

const Hero = () => {
  return (
    <main className="relative bottom-24">
      <Image className="h-[100vh] w-full z-0" src={hero} alt="mainherobg" />
      <div className="h-[200vh]"></div>
    </main>
  );
};

export default Hero;
