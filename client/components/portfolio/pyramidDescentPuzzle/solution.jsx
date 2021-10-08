import React from 'react';

const Solution = ({ solution }) => {
  return (
    <div className="graphics">
        {solution.map((item, index) => <div key={item + index} className="list">{item.map((letter, index) => <div key={letter + index} className="item">{letter}</div>)}</div>)}
    </div>
  )
}

export default Solution;
