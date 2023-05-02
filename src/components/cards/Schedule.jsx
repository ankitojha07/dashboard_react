import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ScheduleData from "../../data/schedule";

const Schedule = () => {
  return (
    <>
      <div className="w-5/12 bg-white p-5 rounded-xl max-md:w-full">
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
        {/* <div className="card mt-5 border-l-4 border-green px-2">
          <p className="text-xs font-bold ">
            Meeting with suppliers from Kuta Bali
          </p>
          <p className="text-xs mt-1">14.00-15.00</p>
          <p className="text-xs mt-1">at Sunset Road, Kuta, Bali </p>
        </div> */}
      </div>
    </>
  );
};

export default Schedule;
