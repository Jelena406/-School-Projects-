import Main from './components/Main';

import Footer from './components/Footer';
import React, {useEffect} from 'react';
import {useState} from 'react';
import Header from './components/Header';
import {getPlanetData} from './api';
import List from './components/List';

function App() {
  const [currentPlanet, setCurrentPlanet] = useState('Mercury');
  const [currentPlanetData, setCurrentPlanetData] = useState({});
  const [listItem, setListItem] = useState('overview');
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
      <Main mainDetails={currentPlanetData} listItem={listItem} />
      <List setListItem={setListItem} listItem={listItem} />
      <Footer footerDetails={currentPlanetData} />
    </>
  );
}

export default App;
