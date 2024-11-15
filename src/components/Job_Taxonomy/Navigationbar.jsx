import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";

function JobNavigationbar() {
  return (
    <div className="flex items-center z-10 mt-[55px] w-full h-[60px] bg-white">
      <div className="ml-[150px] flex items-center text-3xl">
        <h1 className="font-medium">Job Taxonomy</h1>
        <a href="/" className="absolute right-[105px]">
          <FaUserCircle />
        </a>
        <a href="/" className="absolute right-[170px]">
          <FaRegBell />
        </a>
      </div>
    </div>
  );
}

export default JobNavigationbar;
