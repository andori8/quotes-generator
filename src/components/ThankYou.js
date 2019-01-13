import React from 'react';
import Smiley from '../images/smiley.png';

const ThankYou = () => {
  return (
    <div className="container">
      <div className="quote-show">
        <h1>Thank You for Your Submission!</h1><br />
        <img src={Smiley} />
      </div>
    </div>
  )
}

export default ThankYou;
