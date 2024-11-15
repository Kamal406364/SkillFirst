import React, { useState } from 'react';
import JobSidebarIcon from './SidebarIcon';
import { MdOutlineWidgets } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { ImBooks } from "react-icons/im";
import { CiSettings } from "react-icons/ci";

export default function JobSideBar() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-screen absolute top-0 left-0 z-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 
      w-16 hover:w-36 transition-all duration-300 ease-in-out transition-width flex flex-col items-center justify-center 
      space-y-8 rounded-r-3xl shadow-2xl"
    >
      <JobSidebarIcon icon={<MdOutlineWidgets size={20} />} value={0} index={index} setIndex={setIndex} isHovered={isHovered} name="Skill Library" href="/" />
      <JobSidebarIcon icon={<RiContactsLine size={20} />} value={1} index={index} setIndex={setIndex} isHovered={isHovered} name="...." href="/" />
      <JobSidebarIcon icon={<VscGraph size={20} />} value={2} index={index} setIndex={setIndex} isHovered={isHovered} name="Skill Analytics" href="/" />
      <JobSidebarIcon icon={<ImBooks size={20} />} value={3} index={index} setIndex={setIndex} isHovered={isHovered} name="Skill Rubrics" href="/" />
      <JobSidebarIcon icon={<CiSettings size={20} />} value={4} index={index} setIndex={setIndex} isHovered={isHovered} name="Settings" href="/" />
    </div>
  );
}
