import React from "react";

import { BiLike } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";

const CardList = () => {
  return (
    <>
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
    </>
  );
};

export default CardList;
