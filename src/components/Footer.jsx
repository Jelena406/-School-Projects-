import React, {useState} from 'react';

export default function Footer() {
  const [footerDetails, setFooterDetails] = useState({
    rotationTime: '58.6 DAYS',
    revolutionTime: '87.97 DAYS',
    radius: '2,439.7km',
    average: '430°C',
  });
  return (
    <footer>
      <div>
        <p> ROTATION TIME</p>
        <h3> {footerDetails.rotationTime}</h3>
      </div>
      <div>
        <p> REVOLUTION TIME</p>
        <h3> {footerDetails.revolutionTime}</h3>
      </div>
      <div>
        <p> RADIUS</p>
        <h3> {footerDetails.radius}</h3>
      </div>
      <div>
        <p> AVERAGE TEMP. </p>
        <h3> {footerDetails.average}</h3>
      </div>
    </footer>
  );
}

// ovo ti je primjer hardkodovanja koristeci state
