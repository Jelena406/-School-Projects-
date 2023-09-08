import Header from './components/Header';

function App() {
  const navigate = (planet) => {
    console.log(planet);
  };
  return (
    <>
      <Header navigate={navigate} />
      <h2>mica</h2>
      <ul>
        <li>test</li>
      </ul>
    </>
  );
}

export default App;
