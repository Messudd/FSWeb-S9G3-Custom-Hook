import React, { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import geceModuAc from './../hooks/geceModuAc';

const App = () => {
  const initialMode = false;
  const [coinData, setCoinData] = useState([]);
  const [writeModelocal, initialReadModeFromlocal] = useLocalStorage();
  const [geceModu, toggleMode] = geceModuAc(initialReadModeFromlocal('mode',initialMode));
 
   useEffect(() => {
     axios
       .get(
         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
       )
       .then(res => setCoinData(res.data))
       .catch(err => console.log(err));
   }, []);


  useEffect(() => {
    writeModelocal('mode',{darkMode: geceModu});
  },[geceModu]);


  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModu} toggleMode={toggleMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
