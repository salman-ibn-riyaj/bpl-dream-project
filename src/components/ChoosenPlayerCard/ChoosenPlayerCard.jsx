import React from 'react';
import { RiDeleteBin3Fill } from "react-icons/ri";


const ChoosenPlayerCard = ({choosenplayer, setChoosenPlayers, choosenPlayers, coins, setCoins}) => {

    const handleDelete = () => {
        {
           const filteredPlayers = choosenPlayers.filter(perPlayer => perPlayer.name !== choosenplayer.name);
           setChoosenPlayers(filteredPlayers);

           setCoins(coins + choosenplayer.price);


        }
    }
    return (
        <div className='flex items-center justify-between p-5 rounded-md bg-amber-100'>
            <div className='flex items-center gap-4'>
                <img className='w-16.5' src={choosenplayer.image} alt="" />
                <div>
                    <h2 className='font-bold'>{choosenplayer.name}</h2>
                    <p className='font-bold'>{choosenplayer.price}</p>
                </div>
            </div>

            <button onClick={handleDelete}> <RiDeleteBin3Fill />
            </button>
        </div>
    );
};

export default ChoosenPlayerCard;