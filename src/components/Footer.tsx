import Image from "next/image";
import React from "react";
import { defi, logo, telangana, telegram } from "../../public/assets";
import { Audit, footerButton, footerItems, socialMedia } from "@/constants";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <main className=" bg-gray-400 px-10 py-5 ">
      {/* first 2 div  */}

      <div className="flex flex-col">
        {/* here it has to 2 div  */}
        {/* this is logo and three div  */}

        <div>
          <Image src={logo} alt="logo" />
          <div>
            <h1>Quill Audits</h1>
            <p>Making Web3 a safer place</p>
          </div>
        </div>

        {/* top is logo div  */}
        <div className="border border-blue-400 md:flex ">
          <main className="flex flex-col bg-purple-300 w-full justify-between">
            <div className="flex w-full flex-col-reverse md:flex-row  justify-between">
              <section className="flex">
                <div>
                  <div>
                    <h1>More About Quill</h1>
                    <div>
                      <p>About Us</p>
                      <p>FAQs</p>
                      <p>Blockchains We Audit</p>
                    </div>
                  </div>
                  <div>
                    <h1>Contact Us:</h1>
                    <div>
                      <div className="flex">
                        <Mail />
                        <p className="underline italic">audits@quillhash.com</p>
                      </div>
                      <div className="flex">
                        <Image src={telegram} alt="telegram" />
                        <p>t.me/quillaudits</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div>
                    <div>
                      {/* img  */}
                      <h1>Our Location:</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <h1>Audit Services</h1>
                  {Audit.map((data, i) => (
                    <ul key={i}>
                      <li>{data.name}</li>
                    </ul>
                  ))}
                </div>
              </section>
              <section className="flex flex-col-reverse md:block">
                <div className="md:flex grid grid-cols-2 ">
                  <div className="md:hidden">
                    <h1 className="">Audit Services</h1>
                    {Audit.map((data, i) => (
                      <ul key={i}>
                        <li>{data.name}</li>
                      </ul>
                    ))}
                  </div>
                  {footerItems.map((items, i) => (
                    <div key={i} className="">
                      <h5 className="font-semibold">{items.ftitle}</h5>
                      {items.fItems.map((ffitem, index) => (
                        <ul key={index}>
                          <li>{ffitem.fItem}</li>
                        </ul>
                      ))}
                    </div>
                  ))}
                </div>
                <div>
                  <div>
                    <h1 className="hidden md:block">Our programmer</h1>
                    <div />
                  </div>
                  <div>
                    {footerButton.map((but, i) => (
                      <Link
                        key={but.bid}
                        href={""}
                        className={buttonVariants({ variant: "default" })}
                      >
                        {but.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div></div>
              </section>
            </div>
            <div>
              <div>
                <section className=" w-full flex justify-between">
                  <div>
                    <Image src={defi} alt="defi" />
                    <Image src={telangana} alt="defi" />
                  </div>
                  <div className=" flex justify-center items-center gap-5">
                    {socialMedia.map((social, i) => (
                      <div key={i} className="">
                        <Image
                          src={social.img}
                          alt="social"
                          className="hover:border hover:border-blue-400 rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <div></div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div>
        <div>
          <div />
          <div>
            <p>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Footer;
