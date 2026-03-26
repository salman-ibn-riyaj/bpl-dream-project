import React from 'react';
import navLogo from '../../assets/logo.png';
import navDollar from '../../assets/dollar.png'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-8 btn btn-success mb-3.5'>
            <div>
                <img className='w-12.5' src={navLogo} alt="" />
            </div>

            <ul className='flex items-center gap-3.5 font-bold'>
                <li><a href="">Home</a></li>
                <li><a href="">Fixture</a></li>
                <li><a href="">Teams</a></li>
                <li><a href="">Schedules</a></li>
            </ul>

            <div className='font-bold flex items-center gap-2.5'>
                <span>0</span>
                <p>Coins</p>
                <img src={navDollar} alt="" />
            </div>
        </nav>
    );
};

export default Navbar;