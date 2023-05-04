import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ScheduleData from "../../data/schedule";

const Schedule = () => {
  return (
    <>
      <div className="w-6/12 bg-white p-1 rounded-xl max-md:w-full">
        <div className="title flex flex-row justify-between items-center">
          <p className="font-bold text-sm">Today’s schedule</p>
          <div className="flex flex-row cursor-pointer">
            <p className="text-xs">See All</p>
            <MdKeyboardArrowRight className="text-grayOrg" />
          </div>
        </div>
        <div className=" ">
          {ScheduleData.map((data) => {
            return (
              <>
                <div
                  className="card mt-5 border-l-4  px-2"
                  style={{ borderColor: data.color }}
                >
                  <p className="text-xs font-bold ">{data.title}</p>
                  <p className="text-xs mt-1">{data.time}</p>
                  <p className="text-xs mt-1">{data.location} </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Schedule;
