import React from 'react';

export default function Header({navigate}) {
  const planets = ['MERCURY', 'VENUS', 'EARTH', 'MARS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE'];
  return (
    <>
      <nav>
        <h2>THE PLANETS</h2>
        <nav className="navbar fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  {planets.map((planet) => (
                    <li key={planet} className={planet.toLowerCase()} onClick={() => navigate(planet)}>
                      {planet}
                      <img className="arrow" src="assets/images/icon-chevron.svg" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <ul>
          {planets.map((planet) => (
            <li key={planet} className={planet.toLowerCase()} onClick={() => navigate(planet)}>
              {planet}
            </li>
          ))}
        </ul>
      </nav>
      <div className="line"></div>
    </>
  );
}

// kroz props primamo fiju navigate
// navigate se poziva na klik na li i prosledjuje naziv trenutne planete na koju klikcemo
