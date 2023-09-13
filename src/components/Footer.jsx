import React from 'react';

export default function Footer({footerDetails = {}}) {
  return (
    <footer>
      <div>
        <p> ROTATION TIME</p>
        <h1> {footerDetails.rotation}</h1>
      </div>
      <div>
        <p> REVOLUTION TIME</p>
        <h1> {footerDetails.revolution}</h1>
      </div>
      <div>
        <p> RADIUS</p>
        <h1> {footerDetails.radius}</h1>
      </div>
      <div>
        <p> AVERAGE TEMP. </p>
        <h1> {footerDetails.temperature}</h1>
      </div>
    </footer>
  );
}

// ovo ti je primjer hardkodovanja koristeci state
