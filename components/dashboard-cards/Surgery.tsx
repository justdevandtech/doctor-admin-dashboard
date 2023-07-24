"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import AOS from "aos";

import surgeryIcon from "../../public/svg/surgeryIcon.svg";
import chartIcon from "../../public/svg/chart.svg";
import { useEffect } from "react";

const SurgeryCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="w-full h-[200px] lg:w-[268px] md:h-[196px] bg-white px-[20px] py-3 rounded-[4px] flex-1"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            className="bg-white shadow-lg h-[24px] w-[24px] p-1"
            src={surgeryIcon}
            width="16"
            height="16"
            alt="hearticon"
          />
          <p className="text-black text-[12px] font-normal">Surgery</p>
        </div>
        <MoreHorizontal className="text-black cursor-pointer" />
      </div>
      <div className="flex items-center gap-[8px] mt-2">
        <h3 data-aos="fade-down" className="text-black text-[32px] font-medium">
          296
        </h3>
        <div
          data-aos="fade-down"
          className="bg-[#E4EEF8] flex items-center justify-center w-[58px] h-[23px] text-[#044E9D] font-medium text-[12px] p-4 rounded-[11px]"
        >
          +123%
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex-1">
          <Image width="90" height="61" src={chartIcon} alt="chart" />
        </div>
        <div className="flex-1">
          <p className="text-[10px] leading-[15px] text-black font-medium mt-3">
            Data obtained from the last 7days from 5.567 visitors to 7.525
            visitors
          </p>
        </div>
      </div>
    </div>
  );
};

export default SurgeryCard;
