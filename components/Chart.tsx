"use client";

import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

import surgeryIcon from "../public/svg/surgeryIcon.svg";
import Image from "next/image";
import AOS from "aos";

const Chart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20px",
          endingShape: "rounded",
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      fill: {
        opacity: 1,
        colors: ["#044E9D", "#0AA752"],
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="bg-white p-3 flex-1 flex flex-col h-[450px]"
      id="chart"
    >
      <div className="flex items-center gap-48 mb-5">
        <div className="flex items-center gap-1">
          <Image
            className="bg-white shadow-lg h-[24px] w-[24px] p-1"
            src={surgeryIcon}
            width="16"
            height="16"
            alt="hearticon"
          />
          <p className="text-[12px] font-medium">Patient Statistics</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <div className="h-[10px] w-[10px] rounded-[50%] bg-[#0456AC]"></div>
            <p className="font-medium text-[10px]">Patient</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-[10px] w-[10px] rounded-[50%] bg-[#0AA752]"></div>
            <p className="font-medium text-[10px]">Inpatient</p>
          </div>
        </div>
      </div>
      <ReactApexChart
        options={state.options as any}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default Chart;
