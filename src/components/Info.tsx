import { CarpeDiem, manualmorepoints, pensionJourney } from "@/constants";
import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <section>
      <div>
        {CarpeDiem.map((infos, i) => (
          <div key={i}>
            <h1 className="font-bold text-4xl my-10 md:pr-32">{infos.title}</h1>
            <p className="md:pr-32 my-8">{infos.info}</p>
            <Image src={infos.image} alt="img" />
          </div>
        ))}
      </div>
      <div>
        {pensionJourney.map((info, ip) => (
          <div key={ip}>
            <div className="">
              {info.title}
              {info.points?.map((sminfo, im) => (
                <div key={im}>
                  <h1 className="text-blue-300">{sminfo.point}</h1>
                  <div>
                    {ip === 1 && // Check if the current point index is 1
                      manualmorepoints.map((extrapoints, i) => (
                        <ul key={i}>
                          <li className="text-green-300">
                            {extrapoints.pointss} <span>{extrapoints.ans}</span>
                          </li>
                        </ul>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
