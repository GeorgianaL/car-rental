import React from "react";

import './style.scss';

const text = {
  'title': 'BEST in City',
  'subtitle': 'TRUSTED Services in Car Rental',
  'steps': [
    {
      'title': 'Pick a car online',
      'description': 'by browsing and selecting THE ONE',
    },
    {
      'title': 'Get',
      'description': 'from the nearest parking lot',
    },
    {
      'title': 'Return',
      'description': 'wherever you want',
    }
  ]
};

const Landpage = () => (
  <div className="landpage">
    <div className="title">
      <p className="title__first">{text.title}</p>
      <p className="title__second">{text.subtitle}</p>
    </div>
    <div className="steps">
    {
      text.steps.map((step, repeatIndex) => (
        <div className="step">
          <div className="step__index">{repeatIndex}</div>
            <div className="step__description">
              <p>{step.title}</p>
              <p>{step.description}</p>
          </div>
        </div>
      ))
    }
    </div>
  </div>
);

export default Landpage;
