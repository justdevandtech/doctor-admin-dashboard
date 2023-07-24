"use client";

import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { useEffect, useState } from "react";
import calenderIcon from "../public/svg/calenderIcon.svg";
import AOS from "aos";

const CalenderComp = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="flex-1 flex flex-col bg-white p-3 py-5 h-[450px]"
    >
      <div className="flex items-center gap-48 mb-5">
        <div className="flex items-center gap-1">
          <Image
            className="bg-white shadow-lg h-[24px] w-[24px] p-1"
            src={calenderIcon}
            width="16"
            height="16"
            alt="hearticon"
          />
          <p className="text-[12px] font-medium">Calender</p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-1">
            <div className="h-[10px] w-[10px] rounded-[50%] bg-[#0456AC]"></div>
            <p className="font-medium text-[10px]">Appointment</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-[10px] w-[10px] rounded-[50%] bg-[#0AA752]"></div>
            <p className="font-medium text-[10px]">Meeting</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-[10px] w-[10px] rounded-[50%] bg-[#F5B91F]"></div>
            <p className="font-medium text-[10px]">Surgery</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  items-center gap-3">
        <div className="">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md mt-1 border-0"
          />
        </div>
        <div className="border-1 p-2">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <div className="h-[10px] w-[10px] rounded-[50%] bg-[#0456AC]"></div>
              <p className="font-medium text-[10px]">Dr. Rick Appointent</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-[10px] w-[10px] rounded-[50%] bg-[#0AA752]"></div>
              <p className="font-medium text-[10px]">Dentist Meetup</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-[10px] w-[10px] rounded-[50%] bg-[#F5B91F]"></div>
              <p className="font-medium text-[10px]">Jhon Surgery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderComp;
