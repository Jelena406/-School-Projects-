import React, {useState} from 'react';

export default function Main({mainDetails = {}}) {
  return (
    <main>
      <img className="planet-img" src={mainDetails?.images?.planet} alt="" />
      <div className="main-text">
        <div className="description">
          <h1>{mainDetails.name}</h1>
          <p>{mainDetails?.overview?.content}</p>
          <div className="source">
            <p>Source:</p>
            <a href={mainDetails?.overview?.source} target="_blank">
              Wikipedia
              <img src="./assets/source-icon.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
