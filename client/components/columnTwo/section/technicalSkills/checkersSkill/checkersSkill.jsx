import React from 'react';
import Board from './board';

const CheckersSkill = () => {
  return (
    <div className="skillColumnTwo">
      <h1 className="skillTitle">Checkers</h1>
      <Board />
      <h3>Description</h3>
      <p>
        Checkers is a game of skill played with two players. Black always goes first. Pieces are moved one space diagonally either left or right on each turn. If there is a piece of the opposite color in this space and an open space in the space beyond it, the player must jump. A jump is made by moving the piece to the space beyond and removing the opponents piece from the board. If there is another jump that can be made, the player may jump or end the turn. If a piece is moved to the opponents side of the board, the piece is kinged and can now move forward and backward. The game is won when all of the opponents pieces are removed from the board.
      </p>
      <p>
        The logic in the game was written in Javascript and uses CSS and React state to manage piece position ans style.
      </p>
    </div>
  );
}

export default CheckersSkill;
