
import { Suspense } from 'react'
import './App.css'
import AvailablePlayerBar from './components/Navbar/AvailablePlayerBar/AvailablePlayerBar'
import Banner from './components/Navbar/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'


const dataFetch = async() => {
  const res = await fetch('/data.json');
  return res.json();
}

const dataPromise = dataFetch();

function App() {
  

  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <AvailablePlayerBar></AvailablePlayerBar>

      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>
}>
        <Players dataPromise={dataPromise}></Players>
      </Suspense>

      <Newsletter></Newsletter>

      <Footer></Footer>
    </>
  )
}

export default App
