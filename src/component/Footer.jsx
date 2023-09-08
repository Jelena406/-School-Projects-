import React from 'react';
import '../styles/Footer.css';

export default function Footer({footerDetails = {}}) {
  return (
    <footer>
      <div>
        <p> ROTATION TIME</p>
        <h3> {footerDetails.rotation}</h3>
      </div>
      <div>
        <p> REVOLUTION TIME</p>
        <h3> {footerDetails.revolution}</h3>
      </div>
      <div>
        <p> RADIUS</p>
        <h3> {footerDetails.radius}</h3>
      </div>
      <div>
        <p> AVERAGE TEMP. </p>
        <h3> {footerDetails.temperature}</h3>
      </div>
    </footer>
  );
}

// ovo ti je primjer hardkodovanja koristeci state
