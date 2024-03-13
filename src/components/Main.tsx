import React from "react";
import Hero from "./Hero";
import BeforeAndAfter from "./BeforeAndAfter";
import { Button } from "./ui/button";
import Info from "./Info";

const Main = () => {
  return (
    <div>
      <Hero />
      <BeforeAndAfter />
      <h1 className="text-center text-3xl text-blue-900 font-bold mt-5 md:mt-16">
        See how QuillAudits is a trusted partner in <br /> 1000+ Audit stories
      </h1>

      <Button className="mx-auto block px-6 py-2 my-5">Request an Audit</Button>

      <div className="md:px-20 px-5 items-center justify-between bg-gray-400 flex md:flex-row flex-col-reverse w-full">
        <div className=" md:w-3/5 ">
          <h1 className="md:pr-32">
            Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
            self-managed, inclusive, globally portable fund. Unique for its
            token burn mechanism, it ensures a sustainable 4.32% inflation
            payout. With $143.11k and 41.06% of CDP already burned, it serves 35
            users globally.
          </h1>
          <Info />
        </div>
        <div className=" md:w-2/5 relative ">
          <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  hover:border-blue-700 border-blue-300 border">
            <div>
              <p>Headquarters</p>
              <h5>Switzerland</h5>
            </div>
            <p>Chain</p>
            <h5>Pulse Blockchain</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
