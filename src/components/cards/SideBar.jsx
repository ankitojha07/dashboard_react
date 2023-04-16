import React from "react";

import { GoDashboard } from "react-icons/go";
import { BsFillTagsFill } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";

const SideBar = () => {
  return (
    <>
      <div className="w-3/12 flex justify-center max-sm:w-1/12">
        <div className="sidebar w-3/4 max-md:w-full bg-black  rounded-3xl p-5 text-white flex flex-col justify-around ">
          <h1 className="text-3xl font-bold w-full mt-10 ">Board.</h1>
          <div className="nav-links h-4/6 flex flex-col justify-start">
            <div className="nav-link flex w-8/12 justify-start items-center">
              <GoDashboard className="mr-2" />
              <h3 className="text-sm max-sm:text-4xl">Dashboard</h3>
            </div>
            <div className="nav-link flex full justify-start items-center mt-5">
              <BsFillTagsFill className="mr-2" />
              <h3 className="text-sm">Transactions</h3>
            </div>
            <div className="nav-link flex w-8/12 justify-start items-center mt-5">
              <TbCalendarTime className="mr-2" />
              <h3 className="text-sm">Schedules</h3>
            </div>
            <div className="nav-link flex w-8/12 justify-start items-center mt-5">
              <BiUserCircle className="mr-2" />
              <h3 className="text-sm">Users</h3>
            </div>
            <div className="nav-link flex w-8/12 justify-start items-center mt-5">
              <AiOutlineSetting className="mr-2" />
              <h3 className="text-sm">Settings</h3>
            </div>
          </div>

          <div className="nav-bottom ">
            <h5 className="text-sm">Help</h5>
            <h5 className="text-sm mt-2">Contact Us</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
