import Header from './components/Header';

function App() {
  const navigate = (planet) => {
    console.log(planet);
  };
  return <Header navigate={navigate} />;
}

export default App;
