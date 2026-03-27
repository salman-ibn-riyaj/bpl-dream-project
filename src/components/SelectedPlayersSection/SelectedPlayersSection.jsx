import React from 'react';
import ChoosenPlayerCard from '../ChoosenPlayerCard/ChoosenPlayerCard';

const SelectedPlayersSection = ({choosenPlayers, setChoosenPlayers, coins, setCoins}) => {
    return (
        <div className='w-11/12 mx-auto space-y-2'>
            {
                choosenPlayers.map((choosenplayer, ind) => <ChoosenPlayerCard choosenplayer={choosenplayer} key={ind} setChoosenPlayers={setChoosenPlayers} choosenPlayers={choosenPlayers} coins={coins} setCoins={setCoins}></ChoosenPlayerCard>)
            }
        </div>
    );
};

export default SelectedPlayersSection;