import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function SkillTable() {
  const [skillData, setskillData] = useState([]);

  useEffect(()=>{
    const fetchskills=async ()=>{
    try{
      const response=await axios.get('api-url'); //route should be mentioned
      setskillData(response.data);

    }catch(error){
      console.error("Error fetching data",error);
    }
  };
  fetchskills();
    
  },[]);

  return (
    <div className="ml-[152px] mt-[25px]">
      <table className="w-full bg-white border-t border-l border-r border-b border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600 font-semibold">
              SKILL UNIQUE ID
            </th>
            <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600 font-semibold">
              SKILL CATEGORY
            </th>
            <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600 font-semibold">
              SKILL SUB-CATEGORY
            </th>
            <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600 font-semibold">
              SKILL NAME
            </th>
            <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600 font-semibold">
              SKILL TYPE
            </th>
            <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600 font-semibold">
              SKILL PRIORITY LEVEL
            </th>
            <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600 font-semibold">
              VALIDATION AVAILABLE
            </th>
          </tr>
        </thead>
        <tbody>
            {skillData.map((skill,index)=>(
                <tr key={index}>
                <td className="px-4 py-2 border-b border-gray-200 text-blue-500">{skill.skill_unique_id}</td>
                <td className="px-4 py-2 border-b border-gray-200">{skill.skill_category}</td>
                <td className="px-4 py-2 border-b border-gray-200">{skill.skill_sub_category}</td>
                <td className="px-4 py-2 border-b border-gray-200">{skill.skill_name}</td>
                <td className="px-4 py-2 border-b border-gray-200">{skill.skill_type}</td>
                <td className="px-4 py-2 border-b border-gray-200">{skill.skill_priority_level}</td>
                <td className="px-4 py-2 border-b border-gray-200">{skill.skill_validation_available}</td>
              </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default SkillTable;
