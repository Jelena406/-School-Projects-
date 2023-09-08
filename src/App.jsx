import Main from './components/Main';

import React from 'react';
import Footer from './component/Footer';
import Header from './components/Header';

function App() {
  const navigate = (planet) => {
    console.log(planet);
  };
  return (
    <>
      <Header navigate={navigate} />
      <Main />;
      <Footer />
    </>
  );
}

export default App;
