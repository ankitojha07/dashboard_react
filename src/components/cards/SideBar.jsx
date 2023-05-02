import React from "react";

import { GoDashboard } from "react-icons/go";
import { BsFillTagsFill } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";

const SideBar = () => {
  return (
    <>
      <div className="w-4/12 flex justify-center max-md:w-3/12 sticky">
        <div className="sidebar w-11/12 max-2xl:w-9/12 max-md:w-full bg-black  rounded-3xl p-5 text-white flex flex-col justify-around ">
          <h1 className="text-3xl font-bold w-full mt-10 max-md:hidden">
            Board.
          </h1>
          <h1 className="text-xl font-bold w-full mt-10 justify-center md:hidden max-md:text-center">
            B.
          </h1>
          <div className="nav-links h-4/6 flex flex-col justify-start">
            <div className="nav-link flex w-8/12 justify-start items-center max-md:justify-center max-md:w-full">
              <GoDashboard className="mr-2" />
              <h3 className="text-xs max-md:hidden">Dashboard</h3>
            </div>
            <div className="nav-link flex justify-start max-md:justify-center items-center mt-5 max-md:w-full">
              <BsFillTagsFill className="mr-2" />
              <h3 className="text-xs max-md:hidden">Transactions</h3>
            </div>
            <div className="nav-link flex w-8/12 justify-start max-md:justify-center items-center mt-5 max-md:w-full">
              <TbCalendarTime className="mr-2" />
              <h3 className="text-xs max-md:hidden">Schedules</h3>
            </div>
            <div className="nav-link flex w-8/12 justify-start max-md:justify-center items-center mt-5 max-md:w-full">
              <BiUserCircle className="mr-2" />
              <h3 className="text-xs max-md:hidden">Users</h3>
            </div>
            <div className="nav-link flex w-8/12 justify-start max-md:justify-center items-center mt-5 max-md:w-full">
              <AiOutlineSetting className="mr-2" />
              <h3 className="text-xs max-md:hidden">Settings</h3>
            </div>
          </div>

          <div className="nav-bottom max-md:hidden">
            <h5 className="text-xs">Help</h5>
            <h5 className="text-xs mt-2">Contact Us</h5>
          </div>
          <div className="nav-link flex flex-col w-8/12 justify-start max-md:justify-center items-center mt-5 max-md:w-full hidden">
            <AiOutlineSetting className="mt-5" />
            <AiOutlineSetting className="mt-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
