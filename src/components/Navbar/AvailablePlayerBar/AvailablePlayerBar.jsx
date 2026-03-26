import React from "react";

const AvailablePlayerBar = () => {
  return (
    <div className="flex justify-between items-center p-3 my-5 w-11/12 mx-auto">
      <h2 className="font-bold text-2xl text-blue-500">Available Players</h2>

      <div>
        <button className="btn btn-secondary rounded-l-xl border-r-0 rounded-r-none">Available</button>
        <button className="btn btn-success rounded-r-xl
         border-l-0 rounded-l-none">Selected</button>
      </div>
    </div>
  );
};

export default AvailablePlayerBar;
