import Image from "next/image";
import React from "react";
import { mailsss } from "../../public/assets";
import { Button } from "./ui/button";

const Newsletter = () => {
  return (
    <main className="bg-[#EDF2FE] flex">
      <div>
        <p>NEWSLETTER</p>
        <h1>
          Security First News <br /> Letter by QuillAudits
        </h1>
        <p>
          Subscribe for the most Exclusive Weekly security based newsletter and
          covering all the recent hacks up to date.
        </p>
      </div>
      <div>
        <Image src={mailsss} alt="mail" />
        <div>
          <input type="text" placeholder="vitalik@ethereum.org" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </main>
  );
};

export default Newsletter;
