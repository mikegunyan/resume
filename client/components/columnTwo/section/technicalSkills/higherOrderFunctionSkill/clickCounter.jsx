import React from 'react';
import withCounter from './withCounter';

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div className="widget">
      <h3>Click Counter</h3>
      <button onClick={() => incrementCount('down')}>-</button>
      {` ${count} `}
      <button onClick={() => incrementCount('up')}>+</button>
      <p>Click "+" or "-" button to either increment or decrement the count.</p>
    </div>
  );
};

export default withCounter(ClickCounter);
