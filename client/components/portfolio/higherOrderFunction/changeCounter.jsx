import React from 'react';
import withCounter from './withCounter';

const ChangeCounter = ({ count, incrementCount }) => {
  return (
    <div className="widget">
      <h3>Change Counter</h3>
      <button onClick={() => incrementCount('down')}>-</button>
      {` ${count} `}
      <input onChange={() => incrementCount('up')}></input>
      <button onClick={() => incrementCount()}>Reset</button>
      <p>Make change to increment the count.</p>
    </div>
  );
};

export default withCounter(ChangeCounter);
