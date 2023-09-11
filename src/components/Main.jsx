import React from 'react';
const imageMap = {
  overview: 'planet',
  structure: 'internal',
  geology: 'geology',
};
export default function Main({mainDetails = {}, listItem}) {
  return (
    <main>
      {listItem === 'geology' && <img className="planet-img" src={mainDetails?.images?.planet} alt="" />}
      <img className="planet-img" src={mainDetails?.images?.[imageMap[listItem]]} alt="" />
      <div className="main-text">
        <div className="description">
          <h1>{mainDetails.name}</h1>
          <p>{mainDetails?.[listItem]?.content}</p>
          <div className="source">
            <p>Source:</p>
            <a href={mainDetails?.[listItem]?.source} target="_blank">
              Wikipedia
              <img src="./assets/source-icon.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
