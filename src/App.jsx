

import Main from './components/Main';
import Footer from './components/Footer';
import React, {useEffect} from 'react';
import {useState} from 'react';
import Header from './components/Header';
import {getPlanetData} from './api';

function App() {
  const [currentPlanet, setCurrentPlanet] = useState('Mercury');
  const [currentPlanetData, setCurrentPlanetData] = useState({});
  const navigate = (planet) => {
    setCurrentPlanet(planet);
  };

  const getData = async () => {
    const result = await getPlanetData(currentPlanet);
    setCurrentPlanetData(result);
  };

  useEffect(() => {
    getData();
  }, [currentPlanet]);

  return (
    <>
      <Header navigate={navigate} currentPlanet={currentPlanet} />
      <Main mainDetails={currentPlanetData} />
      <List />
      <Footer footerDetails={currentPlanetData} />
    </>
  );
}

export default App;

// imamo jedan glavni branch, ime nije fiksno, najcesje je ili develop ili main, to je centralni na koji se spaja sav KeyboardEvent, on treba uvijek da bude osvjezen, moze se koristiti komanda git pull u terminalu ili u vs code u lijevom uglu 2 strelice, prije kreiranja novog brancha uvijek moramo biti sigurni da imamo zadnji branch i iz glavnog brancha pravimo novi
