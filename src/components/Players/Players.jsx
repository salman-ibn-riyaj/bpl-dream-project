import React, { use } from 'react';
import Player from '../Player/Player';

const Players = ({dataPromise, handleChoosenPlayers, setGetPlayers}) => {
    console.log(dataPromise);
    const players = use(dataPromise);
    console.log(players);
    setGetPlayers(players)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto bg-slate-200 p-5 rounded-md'>
            {
                players.map((player, id) => <Player key={id} player={player} handleChoosenPlayers={handleChoosenPlayers}></Player>)
            }
        </div>
    );
};

export default Players;