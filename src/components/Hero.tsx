import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { cd, cdblack, hero } from "../../public/assets";

const Hero = () => {
  return (
    <section className="relative">
      <main className="relative hero">
        <div className="absolute w-full ">
          <div className="flex sm:justify-center justify-between items-center   sm:pt-20 pt-14  px-12 ">
            <div className="flex flex-col lg:flex-row  gap-5 justify-center items-center  ">
              <div className=" bg-gradient-to-r from-gray-900 via-gray-900 to-green-700 text-white flex-1 px-7 py-5 rounded-lg flex flex-col gap-4 sm:gap-10 justify-between">
                <div className="flex items-center justify-end">
                  <Image
                    src={cdblack}
                    alt="cdblack"
                    className="bg-white relative left-10 sm:left-14 rounded-lg"
                  />
                </div>
                <Image src={cd} alt="cd" />
                <p>
                  Carpe Diem Pension, a blockchain-based{" "}
                  <br className="hidden sm:block" />
                  retirement fund, offers permanent payouts
                  <br className="hidden sm:block" /> through CDP deposits, with
                  a 4.32% annual <br className="hidden sm:block" />
                  inflation claimable by depositors.
                </p>
              </div>
              <div className=" flex-1 text-white gap-6 flex flex-col tracking-wide ">
                <h1 className="text-2xl font-semibold ">
                  Securing Trust : Boosting <br />
                  Security and Strengthening <br />
                  Trust at Carpe Diem Pension
                </h1>
                <p className="text-sm ">
                  QuillAudits enhances Carpe Diem Pension by <br />
                  addressing 33 vulnerabilities on the Pulse blockchain, <br />{" "}
                  boosting security and user trust in digital pensions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={hero}
          alt="logo "
          className="lg:h-[75vh] h-[88vh]  object-cover relative -z-10"
        />
      </main>
      <p className="absolute bottom-1 px-4 sm:bottom-2 sm:w-3/5 text-center text-white ">
        QuillAudits Resources Case Studies
      </p>
    </section>
  );
};

export default Hero;
