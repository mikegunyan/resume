import React from 'react';
import withCounter from './withCounter';

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div className="widget">
      <h3>Hover Counter</h3>
      <button onMouseOver={() => incrementCount('down')}>-</button>
      {` ${count} `}
      <button onMouseOver={() => incrementCount('up')}>+</button>
      <p>Hover over "+" or "-" button to either increment or decrement the count.</p>
    </div>
  );
};

export default withCounter(HoverCounter);
