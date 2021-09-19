import React from 'react';

const Victory = ({ victory, turn, resetBoard, toggleVictory }) => {
  if (!victory) {
    return null;
  }
  return (
    <div className="jumpBackground">
      <div className="formBox jumpBox">
        <h2>{`${turn === 'black' ? 'Red' : 'Black'} wins!`}</h2>
        <div>
          <button className="jumpButton" type="button" onClick={() => {
            resetBoard();
            toggleVictory();
          }}>Reset Board</button>
        </div>
      </div>
    </div>
  );
};

export default Victory;
