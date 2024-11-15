import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { FaSearch } from "react-icons/fa";


function JobSearchbar() {
  return (
    <div className="mt-[35px] relative">
      <input
        type="text"
        placeholder="Search by skill"
        className="ml-[150px] pl-[10px] pr-[40px] py-[8px] border rounded-lg border-blue-200 w-[700px]"
      />
      
    
      <FaSearch className="absolute left-[820px] top-1/2 transform -translate-y-1/2 text-gray-500" />
      
     
      <span className="px-[20px] py-[5px] bg-blue-500 absolute right-[87px] border rounded-xl text-white font-medium">
        <button className="flex justify-center items-center">
          Add new Job <GoPlusCircle className="ml-2" />
        </button>
      </span>
    </div>
  );
}

export default JobSearchbar;
