import React from "react";
import { VictoryPie } from "victory-pie";

const myData = [
  { x: [], y: 14 },
  { x: [], y: 31 },
  { x: [], y: 55 },
];

const PiChart = () => {
  return (
    <VictoryPie
      data={myData}
      colorScale={["#EE8484", "#F6DC7D", "#9BDD7C"]}
      radius={100}
    />
  );
};

export default PiChart;
