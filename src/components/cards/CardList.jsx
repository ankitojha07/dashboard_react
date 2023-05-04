import React from "react";
import { cardData } from "../../data/card";

const CardList = () => {
  return (
    <>
      <ul className="card-list mt-5 flex flex-row w-full overflow-y-scroll gap-5 visible">
        {cardData.map((data) => {
          return (
            <li>
              <div
                className="card w-52 p-5 rounded-xl flex flex-row justify-between "
                style={{ backgroundColor: data.color }}
              >
                <div>
                  <p className="text-sm">{data.title}</p>
                  <p className="text-xl font-bold">{data.numeric}</p>
                </div>
                {data.icon}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CardList;
