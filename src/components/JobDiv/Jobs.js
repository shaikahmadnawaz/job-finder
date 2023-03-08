import React from "react";
import { BiTimeFive } from "react-icons/bi";
const Jobs = () => {
  return (
    <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      <div className="group group/item singleJob w-[250px] p-[20px] bg:white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
        <span className="flex justify-between items-center gap-4">
          <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
            Web Developer
          </h1>
          <span>
            <BiTimeFive />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Jobs;
