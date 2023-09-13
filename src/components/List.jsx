import React from 'react';

export default function List({setListItem, listItem}) {
  return (
    <>
      <div className="list">
        <div className={`list-planets ${listItem === 'overview' ? 'active' : ''}`} onClick={() => setListItem('overview')}>
          <p>01</p>
          <h5>OVERVIEW</h5>
        </div>

        <div className={`list-planets ${listItem === 'structure' ? 'active' : ''}`} onClick={() => setListItem('structure')}>
          <p>02</p>
          <h5>
            <span>INTERNAL</span> STRUCTURE
          </h5>
        </div>

        <div className={`list-planets ${listItem === 'geology' ? 'active' : ''}`} onClick={() => setListItem('geology')}>
          <p>03</p>
          <h5>
            SURFACE <span>GEOLOGY</span>
          </h5>
        </div>
      </div>
    </>
  );
}
