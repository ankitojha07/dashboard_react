import React from "react";

import { GoDashboard } from "react-icons/go";
import { BsFillTagsFill } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { BiUserCircle, BiSearch, BiLike } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsBell, BsCashCoin } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-row justify-around h-screen w-full p-5 bg-gray">
        <div className="w-3/12 flex justify-center max-sm:hidden">
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
        {/* {Right side starts here} */}
        <div className="w-9/12  rounded-3xl p-5 max-md:w-full flex flex-col">
          <div className="flex flex-row justify-between w-full">
            <h1 className="text-2xl font-bold ">Dashboard</h1>
            <div className="flex flex-row justify-between items-center w-6/12 max-lg:w-6/12">
              <div className="search flex flex-row items-center">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="search"
                  className="rounded-lg px-2 py-1 max-sm:hidden max-lg:w-40"
                />
                <BiSearch className="-ml-8 max-md:hidden" />
              </div>
              <BsBell className="h-10 w-5" />
              <img src="./1.png" alt="" className="h-8 rounded-full" />
            </div>
          </div>
          {/* {Cards starts here} */}
          <div className="card-list mt-10 flex flex-row justify-between flex-wrap max-md:justify-center ">
            <div className="card bg-liteGreen w-52 max-md:w-80 p-5 rounded-xl flex flex-row justify-between max-lg:mt-5">
              <div>
                <p className="text-sm">Total Revenue</p>
                <p className="text-xl font-bold">$2,129,430</p>
              </div>
              <BsCashCoin />
            </div>
            <div className="card bg-liteOrange w-52 max-md:w-80 p-5 rounded-xl flex flex-row justify-between max-lg:mt-5">
              <div>
                <p className="text-sm">Total Transactions</p>
                <p className="text-xl font-bold">1,520</p>
              </div>
              <BsCashCoin />
            </div>
            <div className="card bg-liteRed w-52 max-md:w-80 p-5 rounded-xl flex flex-row justify-between max-lg:mt-5">
              <div>
                <p className="text-sm">Total Likes</p>
                <p className="text-xl font-bold">9,721</p>
              </div>
              <BiLike />
            </div>
            <div className="card bg-liteBlue w-52 max-md:w-80 p-5 rounded-xl flex flex-row justify-between max-lg:mt-5">
              <div>
                <p className="text-sm">Total Users</p>
                <p className="text-xl font-bold">892</p>
              </div>
              <BsCashCoin />
            </div>
          </div>

          <div className="chart">
            <div>
              <div>
                <p>Activities</p>
                <select name="cars" id="cars" className="border-none">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>4</div>
      </div>
    </>
  );
};

export default HomePage;
