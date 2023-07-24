"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import { Separator } from "../ui/separator";

import homeIcon from "../../public/svg/homeIcon.svg";

const OverallRoom = () => {
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
            src={homeIcon}
            width="16"
            height="16"
            alt="hearticon"
          />
          <p className="text-black text-[12px] font-normal">Total Patient</p>
        </div>
        <MoreHorizontal className="text-black cursor-pointer" />
      </div>
      <div className="flex items-center gap-[8px] mt-2">
        <h3 data-aos="fade-down" className="text-black text-[32px] font-medium">
          10.525
        </h3>
        <div
          data-aos="fade-down"
          className="bg-[#E4EEF8] flex items-center justify-center w-[58px] h-[23px] text-[#044E9D] font-medium text-[12px] p-4 rounded-[11px]"
        >
          +15.2%
        </div>
      </div>
      <p className="text-[10px] leading-[15px] text-black font-medium mt-3">
        Data obtained from the last 7days from 5.567 visitors to 7.525 visitors
      </p>
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-medium">General Room</p>{" "}
          <h4 className="text-[12px] font-semibold">110</h4>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-medium">Private Room</p>{" "}
          <h4 className="text-[12px] font-semibold">110</h4>
        </div>
      </div>
    </div>
  );
};

export default OverallRoom;
