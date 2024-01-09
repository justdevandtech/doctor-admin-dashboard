"use client";

import { MobileSidebar } from "./MobileSideBar";

const Navbar = () => {
  return (
    <div className="flex items-center bg-white h-[86px]">
      <MobileSidebar />
      {/* <div className="flex w-full justify-end mr-3">
        <UserButton afterSignOutUrl="/" />
      </div> */}
    </div>
  );
};

export default Navbar;
