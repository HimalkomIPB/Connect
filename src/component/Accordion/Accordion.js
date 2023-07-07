import React, { useState } from 'react';
import './Accordion.css';

import arrow_up from './../../Assets/Profil Himalkom/arrow-up.svg'
import arrow_down from './../../Assets/Profil Himalkom/arrow-down.svg'

const Accordion = ({ proker_divisi }) => {
  const [selected, setSelected] = useState(null);

  const toggleClick = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div id="proker-accordion-container">
      <div className="proker-accordion-wrapper">
        {proker_divisi.map((proker, i) => (
          <div className="proker-accordion-item" key={i}>
            <div
              className={
                selected === i ? 'proker-accordion-title active' : 'proker-accordion-title'
              }
              onClick={() => toggleClick(i)}
            >
              <h2>{proker.title}</h2>
                <img src={selected === i ? arrow_up : arrow_down} alt="arrow" />
            </div>
            <div
              className={selected === i ? 'proker-accordion-desc show' : 'proker-accordion-desc'}
            >
              <p>{proker.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
