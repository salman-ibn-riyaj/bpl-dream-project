import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayerBar from "./components/Navbar/AvailablePlayerBar/AvailablePlayerBar";
import Banner from "./components/Navbar/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import SelectedPlayersSection from "./components/SelectedPlayersSection/SelectedPlayersSection";

const dataFetch = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const dataPromise = dataFetch();

function App() {
  const [sectionChange, setSectionChange] = useState(true);

  const [choosenPlayers, setChoosenPlayers] = useState([]);

  const handleChoosenPlayers = (player) => {

    let newCoins = coins - player.price;
    if(newCoins >= 0){
      setCoins(newCoins);
      setChoosenPlayers([...choosenPlayers, player])
    }
    else{
      alert('Sorry! Not enough coins to purchase this player!')
    }
    
  }


  const [getPlayers, setGetPlayers] = useState([]);
  console.log(getPlayers);

  const [coins, setCoins] = useState(9600000);



  
  

  return (
    <>
      <Navbar coins={coins}></Navbar>

      <Banner></Banner>

      <AvailablePlayerBar setSectionChange={setSectionChange} choosenPlayers={choosenPlayers} getPlayers={getPlayers}></AvailablePlayerBar>

      {sectionChange ? 
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <Players dataPromise={dataPromise} handleChoosenPlayers={handleChoosenPlayers} setGetPlayers={setGetPlayers} ></Players>
        </Suspense>
       : 
        <SelectedPlayersSection choosenPlayers={choosenPlayers} setChoosenPlayers={setChoosenPlayers} coins={coins} setCoins={setCoins}></SelectedPlayersSection>
      }

      <Newsletter></Newsletter>

      <Footer></Footer>
    </>
  );
}

export default App;
