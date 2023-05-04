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
      <div className="flex flex-row h-screen w-full p-5 bg-gray ">
        <SideBar />
        <div className="w-9/12  rounded-3xl p-5  flex flex-col ">
          <Navbar />
          <ul>
            <li>
              <CardList />
            </li>
          </ul>

          <GraphBox />

          <div className="flex flex-row justify-between mt-5 max-md:flex-col gap-5 ">
            <TopProducts />
            <Schedule />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
