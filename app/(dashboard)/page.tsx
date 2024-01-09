"use client";

import { ChevronDown, ArrowUpRightFromCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SurgeryCard from "@/components/dashboard-cards/Surgery";
import OverallCard from "@/components/dashboard-cards/Overall";
import PatientCard from "@/components/dashboard-cards/TotallPatient";
import OverallRoom from "@/components/dashboard-cards/OvarallRoom";
import Chart from "@/components/Chart";
import CalenderComp from "@/components/CalenderComp";
import TableComponent from "@/components/table/Table";

const DashboardPage = () => {
  return (
    <div className="px-5">
      <div className="flex items-center flex-wrap gap-3 justify-between mt-8">
        <div>
          <h3 className="text-[#000000] font-medium text-[24px]">
            Welcome back Cynthia
          </h3>
          <p>Catch up on the latest update for the past 7days.</p>
        </div>
        <div className="flex items-center gap-10">
          <Button
            className="w-[166px] h-[44px] flex items-center gap-10 rounded-none"
            variant="outline"
            size="icon"
          >
            <p>Last week</p> <ChevronDown className="h-4 w-4" />
          </Button>
          <Button
            className="w-[166px] h-[44px] flex items-center gap-5 px-5 rounded-none bg-[#0456AC]"
            variant="default"
            size="icon"
          >
            <ArrowUpRightFromCircle className="h-4 w-4" /> <p>Export</p>
          </Button>
        </div>
      </div>
      <div className="mt-8 flex items-center flex-wrap gap-12">
        <OverallCard />
        <SurgeryCard />
        <PatientCard />
        <OverallRoom />
      </div>
      <div className="flex flex-col lg:flex-row  items-center gap-3 mt-8">
        <Chart />
        <CalenderComp />
      </div>
      <div className="mt-8">
        <TableComponent />
      </div>
    </div>
  );
};

export default DashboardPage;
