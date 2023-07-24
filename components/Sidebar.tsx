"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import DashboardIcon from "../public/svg/dashboard.svg";
import PatientIcon from "../public/svg/patientIcon.svg";
import AppointmentIcon from "../public/svg/appointmentIcon.svg";
import DoctorIcon from "../public/svg/doctorIcon.svg";
import EmployeeIcon from "../public/svg/employeeIcon.svg";
import DepartmentIcon from "../public/svg/department.svg";
import PaymentIcon from "../public/svg/paymentIcon.svg";
import StockIcon from "../public/svg/stockIcon.svg";
import HelpIcon from "../public/svg/helpIcon.svg";
import SettingIcon from "../public/svg/settingIcon.svg";
import ReportIcon from "../public/svg/reportIcon.svg";

const routes = [
  {
    label: "Overview",
    icon: DashboardIcon,
    href: "/dashboard",
  },
  {
    label: "Patient",
    icon: PatientIcon,
    href: "/dashboard/#",
  },
  {
    label: "Appointment",
    icon: AppointmentIcon,
    href: "/dashboard/#",
  },
  {
    label: "Doctor",
    icon: DoctorIcon,
    href: "/dashboard/#",
  },
  {
    label: "Employee",
    icon: EmployeeIcon,
    href: "/dashboard/#",
  },
  {
    label: "Department",
    icon: DepartmentIcon,
    href: "/dashboard/#",
  },
  {
    label: "Payment",
    icon: PaymentIcon,
    href: "/dashboard/#",
  },
  {
    label: "Product & Stock",
    icon: StockIcon,
    href: "/dashboard/#",
  },
  {
    label: "Help & Center",
    icon: HelpIcon,
    href: "/dashboard/#",
  },
  {
    label: "Settings",
    icon: SettingIcon,
    href: "/dashboard/#",
  },
  {
    label: "Report",
    icon: ReportIcon,
    href: "/dashboard/#",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col text-[#D4D3D3]">
      <div className="py-2 flex-1">
        <Link href="/dashboard">
          <div className="flex pl-3 text-xs flex-col">
            <Image src="/svg/logo.svg" alt="Logo" width="116" height="37" />
            <p className="text-[#6A6A6A] font-medium mt-1">
              Medical Admin Dashboard
            </p>
          </div>
        </Link>
        <div className="space-y-5 mt-10">
          {routes.slice(0, 8).map(route => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group relative pl-3 flex py-3 w-full justify-start font-medium cursor-pointer hover:text-[#0456AC] hover:bg-[#F7FAFD]  transition",
                pathname === route.href
                  ? "text-[#0456AC] bg-[#F7FAFD]"
                  : "text-[#7A7A7A]"
              )}
            >
              <div className="flex items-center flex-1">
                <Image
                  className={cn(
                    "h-5 w-5 mr-3 text-[#7A7A7A] hover:text-[#0456AC] hover:bg-[#F7FAFD]"
                  )}
                  src={route.icon}
                  alt={route.label}
                />
                {route.label}
              </div>
              <div
                className={cn(
                  "h-full w-[5px] group-hover:bg-[#0456AC]  absolute top-0 right-0",
                  pathname === route.href && " bg-[#0456AC]"
                )}
              ></div>
            </Link>
          ))}
          <p className="my-5 px-3 text-[#959595] text-xs font-medium">
            Help & Settings
          </p>
          {routes.slice(8, 11).map(route => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group relative pl-3 flex py-3 w-full justify-start font-medium cursor-pointer hover:text-[#0456AC] hover:bg-[#F7FAFD]  transition",
                pathname === route.href
                  ? "text-[#0456AC] bg-[#F7FAFD]"
                  : "text-[#7A7A7A]"
              )}
            >
              <div className="flex items-center flex-1">
                <Image
                  className={cn(
                    "h-5 w-5 mr-3 text-[#7A7A7A] hover:text-[#0456AC] hover:bg-[#F7FAFD]"
                  )}
                  src={route.icon}
                  alt={route.label}
                />
                {route.label}
              </div>
              <div
                className={cn(
                  "h-full w-[5px] group-hover:bg-[#0456AC]  absolute top-0 right-0",
                  pathname === route.href && " bg-[#0456AC]"
                )}
              ></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
