import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { cd, cdblack, hero } from "../../public/assets";

const Hero = () => {
  return (
    <main className="relative bottom-[15vh]">
      <Image className="h-[100vh] w-full z-0" src={hero} alt="mainherobg" />
      <div className="">
        <div></div>

        <div className="relative bottom-[76vh] text-white">
          <div className="border flex w-full px-10 sm:px-36 lg:flex-row flex-col">
            <div className="bg-gradient-to-r from-black via-black to-green-800 justify-center items-center flex flex-col flex-1 h-[70vh] rounded-lg ">
              <div className="bg-white  p-1 sm:p-4 rounded-lg relative lg:w-[13vw] lg:left-64 lg:bottom-20 md:left-80 md:top-3 left-52 top-5   ">
                <Image src={cdblack} alt="cd-black" />
              </div>
              <Image src={cd} alt="cd" className="w-[10wv]" />
              <p className="px-[10vw] smpy-[10vh]">
                Carpe Diem Pension, a blockchain-based retirement fund, offers
                permanent payouts through CDP deposits, with a 4.32% annual
                inflation claimable by depositors.
              </p>
            </div>
            <div className="flex-1">hello</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
