import React from "react";

import SideBar from "../components/cards/SideBar";
import CardList from "../components/cards/CardList";
import Navbar from "../components/cards/Navbar";
import GraphBox from "../components/cards/GraphBox";
import TopProducts from "../components/cards/TopProducts";
import Schedule from "../components/cards/Schedule";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-row h-screen w-full p-2 bg-gray gap-1">
        <SideBar />
        <div className="w-10/12  rounded-3xl p-2  flex flex-col gap-5">
          <Navbar />
          <ul>
            <li>
              <CardList />
            </li>
          </ul>

          <div className="overflow-x-scroll">
            <GraphBox />
            <div className="flex flex-row justify-between mt-5 max-md:flex-col gap-5 ">
              <TopProducts />
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
