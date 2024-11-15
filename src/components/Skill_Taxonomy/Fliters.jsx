import React, { useState } from "react";

function SkillFilters() {
  const titles = [
    "Career Area",
    "Job Family",
    "Job",
    "Specialized Job",
    "Job Level",
  ];
  const [selectedTitles, setSelectedTitles] = useState(
    Array(titles.length).fill("")
  );

  const handleChangeTitle = (index, event) => {
    const newSelectedTitles = [...selectedTitles];
    newSelectedTitles[index] = event.target.value;
    setSelectedTitles(newSelectedTitles);
  };

  const skills = ["Skill Category", "Skill Sub-Category", "Skill"];
  const [selectedSkills, setSelectedSkills] = useState(
    Array(skills.length).fill("")
  );

  const handleChangeSkill = (index, event) => {
    const newSelectedSkills = [...selectedSkills];
    newSelectedSkills[index] = event.target.value;
    setSelectedSkills(newSelectedSkills);
  };

  return (
    <>
      <div className="ml-[152px] mt-[25px]">
        <h1 className="text-xl text-gray-500">Filter By Job:</h1>
      </div>

      <div className="ml-[152px] mt-[25px] flex space-x-4 w-[1300px] overflow-x-hidden">
        {titles.map((title, index) => (
          <select
            key={title}
            className="flex-1 px-[5px] py-[15px] font-medium border rounded-lg border-gray-300 bg-white text-gray-700"
            value={selectedTitles[index]}
            onChange={(event) => handleChangeTitle(index, event)}
          >
            <option value="" disabled>
              {title}
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        ))}
      </div>

      <div className="ml-[152px] mt-[25px]">
        <h1 className="text-xl text-gray-500">Filter By Skill:</h1>
      </div>
      <div className="ml-[152px] mt-[25px] flex space-x-4 w-[1300px] overflow-x-hidden">
        {skills.map((skill, index) => (
          <select
            key={skill}
            className="flex-1 px-[5px] py-[15px] font-medium border rounded-lg border-gray-300 bg-white text-gray-700"
            value={selectedSkills[index]}
            onChange={(event) => handleChangeSkill(index, event)}
          >
            <option value="" disabled>
              {skill}
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        ))}
      </div>
    </>
  );
}

export default SkillFilters;
