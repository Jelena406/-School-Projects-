import React, {useEffect} from 'react';
import Footer from './component/Footer';
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
      <Footer footerDetails={currentPlanetData} />
    </>
  );
}

export default App;
