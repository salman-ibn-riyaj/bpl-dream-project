import React from "react";
import { PiCricketDuotone } from "react-icons/pi";
import { IoFlagSharp } from "react-icons/io5";

const Player = ({ player }) => {
  console.log(player);
  return (
    <div className="p-4 rounded-md shadow bg-slate-400 my-2">
      <div>
        <img className="w-full h-auto object-cover rounded-md" src={player.image} alt="" />
      </div>

      <div className="flex gap-1 items-center">
        <span className="text-xl">
          {" "}
          <PiCricketDuotone />
        </span>
        <h2 className="text-2xl font-bold text-fuchsia-600 mt-4"> {player.name} </h2>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <span>
            {" "}
            <IoFlagSharp />
          </span>
          <h3 className="font-bold text-red-500"> {player.playercountry} </h3>
        </div>

        <button className="font-bold text-lime-700"> {player.playertype} </button>
      </div>

      <h2 className="font-bold">Ratings: {player.ratings} </h2>

      <div className="flex justify-between items-center">
        <p className="font-bold"> {player.battingstatus} </p>
        <p className="font-bold"> {player.bowlingstatus} </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-bold text-red-800">Price: $  {player.price} </p>
        <button className="btn btn-success">Choose Player</button>
      </div>
    </div>
  );
};

export default Player;
