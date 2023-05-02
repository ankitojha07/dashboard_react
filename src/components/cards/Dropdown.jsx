import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown ">
      <select
        name="cars"
        id="cars"
        className="border-none bg-white text-xs cursor-pointer"
      >
        <option value="1">May - June 2021</option>
        <option value="2">June - July 2021</option>
        <option value="3">July - Aug 2021</option>
        <option value="4">Aug - Sept 2021</option>
      </select>
    </div>
  );
};

export default Dropdown;
