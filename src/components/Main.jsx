import React, {useState} from 'react';

export default function Main() {
  const [mainDetails, setMainDetails] = useState({
    name: 'Mercury',
    overview: {
      content:
        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      source: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
    },
    structure: {
      content: '',
      source: '',
    },
    geology: {
      content: '',
      source: '',
    },
    images: {
      planet: './assets/planet-mercury.svg',
      internal: '',
      geology: '',
    },
  });
  return (
    <main>
      <img className="planet-img" src="./assets\images/planet-mercury.svg" alt="" />
      <div className="main-text">
        <div className="description">
          <h1>{mainDetails.name}</h1>
          <p>{mainDetails?.overview?.content}</p>
          <div className="source">
            <p>Source:</p>
            <a href={mainDetails?.overview?.source}>
              Wikipedia
              <img src={mainDetails?.images?.planet} alt="" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
