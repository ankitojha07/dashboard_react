import React from "react";
import PiChart from "../graphs/PiChart";

const TopProducts = () => {
  return (
    <>
      <div className="w-5/12 bg-white p-5 rounded-xl">
        <div className="title flex flex-row justify-between">
          <p className="text-sm font-bold">Top Products</p>
          <select
            name="cars"
            id="cars"
            className="border-none bg-white text-xs"
          >
            <option value="1">May - June 2021</option>
            <option value="2">June - July 2021</option>
            <option value="3">July - Aug 2021</option>
            <option value="4">Aug - Sept 2021</option>
          </select>
        </div>
        <PiChart />
      </div>
    </>
  );
};

export default TopProducts;
