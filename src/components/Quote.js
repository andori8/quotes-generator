import React from 'react';

const Quote = ({key, quote}) => {
  return (
    <div className="quote-item">
      {quote.blurb}
    </div>
  )
}

export default Quote;
