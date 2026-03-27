import React, { useState } from "react";
import navLogo from "../../assets/logo.png";
import navDollar from "../../assets/dollar.png";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedSwords } from "react-icons/gi";


const Navbar = ({ coins }) => {

    const [dropdown, setDropDown] = useState(false)

    const handleDropDown = () => {
        setDropDown(!dropdown)
    }
  return (
    <nav className="flex justify-between items-center p-8 btn btn-success mb-3.5">
      <div className="flex gap-2 items-center">
        <span onClick={handleDropDown} className="md:hidden">
            {dropdown? <GiCrossedSwords />: <TiThMenu />
}
          
        </span>
        <ul className={`flex flex-col md:hidden absolute ${dropdown? 'top-12': '-top-40'} bg-amber-100 p-5 rounded-md duration-700`}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Fixture</a>
          </li>
          <li>
            <a href="">Teams</a>
          </li>
          <li>
            <a href="">Schedules</a>
          </li>
        </ul>
        <img className="w-12.5" src={navLogo} alt="" />
      </div>

      <ul className="hidden font-bold text-2xl md:flex gap-3">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Fixture</a>
        </li>
        <li>
          <a href="">Teams</a>
        </li>
        <li>
          <a href="">Schedules</a>
        </li>
      </ul>

      <div className="font-bold flex items-center gap-2.5">
        <span> {coins} </span>
        <p>Coins</p>
        <img src={navDollar} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
