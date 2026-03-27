import React, { useState } from "react";

const AvailablePlayerBar = ({setSectionChange, choosenPlayers, getPlayers}) => {

  const [btnColorChange, setBtnColorChange] = useState(true);

  

  return (
    <div className="flex justify-between items-center p-3 my-5 w-11/12 mx-auto">
      <h2 className="font-bold text-2xl text-blue-500">{btnColorChange? `Available Players ${getPlayers.length}` : `Selected Players  ${choosenPlayers.length} / ${getPlayers.length}`}</h2>

      <div>
        <button onClick={() => {setBtnColorChange(true); setSectionChange(true)}} className={`btn ${btnColorChange && 'btn-secondary'} rounded-l-xl border-r-0 rounded-r-none`}>Available</button>


        <button onClick={()=> {setBtnColorChange(false); setSectionChange(false)}} className={`btn ${btnColorChange || 'btn-success'} rounded-r-xl
         border-l-0 rounded-l-none`}>Selected</button>
      </div>
    </div>
  );
};

export default AvailablePlayerBar;
