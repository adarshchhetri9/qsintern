import Image from "next/image";
import React from "react";
import { logo } from "../../public/assets";
import { navLinks } from "@/constants";
import { Button, buttonVariants } from "./ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const hasArrow = (itemIndex: number) => [0, 3, 4].includes(itemIndex);

const Navbar = () => {
  return (
    <nav className="sticky z-50 top-0 w-full px-3 sm:px-20 pt-5 bg-gradient-to-l from-[#06113F] to-[#222A5E]">
      <div className="flex  justify-between items-center gap">
        <Link
          href={"/"}
          className="flex justify-center items-center gap-2 text-2xl"
        >
          <Image src={logo} alt="logo" className="h-12 w-12" />
          <h1 className="text-white">QuillAudits</h1>
        </Link>
        <div className="text-white  gap-8 hidden lg:flex">
          {navLinks.map((nItems, i) => (
            <p
              key={nItems.id}
              className="flex items-center justify-center gap-1.5 hover:text-gray-400 cursor-pointer"
            >
              {nItems.title}
              {hasArrow(i) && <ChevronDown className="h-4 w-4 " />}
            </p>
          ))}
        </div>
        <div>
          <Link
            href={"/requestauditpage"}
            className={buttonVariants({ variant: "default" })}
          >
            Request an Audits
          </Link>
        </div>
      </div>
      <div className="h-[1.5px] bg-[#15245E] mt-3  flex items-center justify-center " />
    </nav>
  );
};

export default Navbar;
