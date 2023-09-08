import React from 'react';
import Footer from './component/Footer';
import {useState} from 'react';
import Header from './components/Header';

function App() {
  const [currentPlanet, setCurrentPlanet] = useState('Mercury');
  const navigate = (planet) => {
    setCurrentPlanet(planet);
  };
  return (
    <>
      <Header navigate={navigate} currentPlanet={currentPlanet} />
      <Footer />
    </>
  );
}

export default App;
