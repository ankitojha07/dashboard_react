import React from "react";

import { BsFillCircleFill } from "react-icons/bs";
import Graph from "../graphs/Graph";
import Dropdown from "./Dropdown";

const GraphBox = () => {
  return (
    <>
      <div className="bg-white p-3 rounded-xl h-80">
        <div className="flex flex-row justify-between">
          <div className="w-2/12">
            <p className="font-bold text-lg">Activities</p>
            <Dropdown />
          </div>
          <div className="flex flex-row w-2/12 justify-around max-md:flex-col">
            <div className="flex flex-row items-center">
              <BsFillCircleFill className="text-liteRed" />
              <p className="text-xs ml-2">Guest</p>
            </div>
            <div className="flex flex-row items-center">
              <BsFillCircleFill className="text-liteGreen" />
              <p className="text-xs ml-2">User</p>
            </div>
          </div>
        </div>
        <Graph />
      </div>
    </>
  );
};

export default GraphBox;
