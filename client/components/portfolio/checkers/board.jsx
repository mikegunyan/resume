import React, { useState } from 'react';
import Jump from './jump';
import Victory from './victory';
import utils from './utils';

const Board = () => {
  const newBoard = utils.newBoard();
  const [board, setBoard] = useState(newBoard.board);
  const [red, setRed] = useState(newBoard.red);
  const [black, setBlack] = useState(newBoard.black);
  const [autoJumpRed, setAutoJumpRed] = useState(newBoard.autoJumpRed);
  const [autoJumpBlack, setAutoJumpBlack] = useState(newBoard.autoJumpBlack);
  const [turn, setTurn] = useState(newBoard.turn);
  const [selected, setSelected] = useState([]);
  const [nextJump, setNextJump] = useState(false);
  const [victory, setVictory] = useState(false);

  const resetBoard = () => {
    setBoard(newBoard.board);
    setRed(newBoard.red);
    setBlack(newBoard.black);
    setAutoJumpRed(newBoard.autoJumpRed);
    setAutoJumpBlack(newBoard.autoJumpBlack);
    setTurn(newBoard.turn);
  }

  const toggleVictory = () => {
    setVictory(!victory);
  }

  const toggleJump = () => {
    setNextJump(!nextJump);
  }

  const skipJump = () => {
    if (turn === 'red') {
      resetRedJump();
      checkAutoJumpBlack();
    } else {
      resetBlackJump();
      checkAutoJumpRed();
    }
    setTurn(turn === 'red' ? 'black' : 'red')
  }

  const checkNextJumpRed = (rows, columns) => {
    const copy = board.slice();
    copy[rows][columns][1] = 'selectedPiece';
    if (rows > 1 && columns > 1 && copy[rows - 2][columns - 2] !== undefined && copy[rows - 2][columns - 2][0] === null && copy[rows][columns][0] === 'X' && (copy[rows - 1][columns - 1][0] === 'o' || copy[rows - 1][columns - 1][0] === 'O')) {
      copy[rows - 2][columns - 2][1] = 'selectedSquare';
      copy[rows - 2][columns - 2][2] = 'moveSelected';
    }
    if (rows > 1 && columns < 6 && copy[rows - 2][columns + 2] !== undefined && copy[rows - 2][columns + 2][0] === null && copy[rows][columns][0] === 'X' && (copy[rows - 1][columns + 1][0] === 'o' || copy[rows - 1][columns + 1][0] === 'O')) {
      copy[rows - 2][columns + 2][1] = 'selectedSquare';
      copy[rows - 2][columns + 2][2] = 'moveSelected';
    }
    if (rows < 6 && columns > 1 && copy[rows + 2][columns - 2] !== undefined && copy[rows + 2][columns - 2][0] === null && (copy[rows + 1][columns - 1][0] === 'o' || copy[rows + 1][columns - 1][0] === 'O')) {
      copy[rows + 2][columns - 2][1] = 'selectedSquare';
      copy[rows + 2][columns - 2][2] = 'moveSelected';
    }
    if (rows < 6 && columns < 6 && copy[rows + 2][columns + 2] !== undefined && copy[rows + 2][columns + 2][0] === null && (copy[rows + 1][columns + 1][0] === 'o' || copy[rows + 1][columns + 1][0] === 'O')) {
      copy[rows + 2][columns + 2][1] = 'selectedSquare';
      copy[rows + 2][columns + 2][2] = 'moveSelected';
    }
    setBoard(copy);
    setSelected([rows, columns]);
    setNextJump(true);
  }

  const checkNextJumpBlack = (rows, columns) => {
    const copy = board.slice();
    copy[rows][columns][1] = 'selectedPiece';
    if (rows > 1 && columns > 1 && copy[rows - 2][columns - 2] !== undefined && copy[rows - 2][columns - 2][0] === null && (copy[rows - 1][columns - 1][0] === 'x' || copy[rows - 1][columns - 1][0] === 'X')) {
      copy[rows - 2][columns - 2][1] = 'selectedSquare';
      copy[rows - 2][columns - 2][2] = 'moveSelected';
    }
    if (rows > 1 && columns < 6 && copy[rows - 2][columns + 2] !== undefined && copy[rows - 2][columns + 2][0] === null && (copy[rows - 1][columns + 1][0] === 'x' || copy[rows - 1][columns + 1][0] === 'X')) {
      copy[rows - 2][columns + 2][1] = 'selectedSquare';
      copy[rows - 2][columns + 2][2] = 'moveSelected';
    }
    if (rows < 6 && columns > 1 && copy[rows + 2][columns - 2] !== undefined && copy[rows + 2][columns - 2][0] === null && copy[rows][columns][0] === 'O' && (copy[rows + 1][columns - 1][0] === 'x' || copy[rows + 1][columns - 1][0] === 'X')) {
      copy[rows + 2][columns - 2][1] = 'selectedSquare';
      copy[rows + 2][columns - 2][2] = 'moveSelected';
    }
    if (rows < 6 && columns < 6 && copy[rows + 2][columns + 2] !== undefined && copy[rows + 2][columns + 2][0] === null && copy[rows][columns][0] === 'O' && (copy[rows + 1][columns + 1][0] === 'x' || copy[rows + 1][columns + 1][0] === 'X')) {
      copy[rows + 2][columns + 2][1] = 'selectedSquare';
      copy[rows + 2][columns + 2][2] = 'moveSelected';
    }
    setBoard(copy);
    setSelected([rows, columns]);
    setNextJump(true);
  }

  const checkTurnRed = () => {
    for (let row = 0; row < board.length; row += 1) {
      for (let column = 0; column < board[row].length; column += 1) {
        if (board[row][column][0] === 'x' || board[row][column][0] === 'X') {
          if (board[row][column][0] === 'X') {
            if ((board[row - 2] && board[row - 2][column - 2] && row > 0 && column > 0 && board[row - 1][column - 1][0] === 'o' && board[row - 2][column - 2][0] === null)
              || (board[row - 2] && board[row - 2][column - 2] && row > 0 && column > 0 && board[row - 1][column - 1][0] === 'O' && board[row - 2][column - 2][0] === null)
              || (board[row - 2] && board[row - 2][column + 2] && row > 0 && column < 7 && board[row - 1][column + 1][0] === 'o' && board[row - 2][column + 2][0] === null)
              || (board[row - 2] && board[row - 2][column + 2] && row > 0 && column < 7 && board[row - 1][column + 1][0] === 'O' && board[row - 2][column + 2][0] === null)
              || (board[row - 1] && board[row - 1][column - 1] && board[row - 1][column - 1][0] === null)
              || (board[row - 1] && board[row - 1][column + 1] && board[row - 1][column + 1][0] === null)) {
                return true;
            }
          }
          if ((board[row + 2] && board[row + 2][column - 2] && row < 7 && column > 0 && board[row + 1][column - 1][0] === 'o' && board[row + 2][column - 2][0] === null)
            || (board[row + 2] && board[row + 2][column - 2] && row < 7 && column > 0 && board[row + 1][column - 1][0] === 'O' && board[row + 2][column - 2][0] === null)
            || (board[row + 2] && board[row + 2][column + 2] && row < 7 && column < 7 && board[row + 1][column + 1][0] === 'o' && board[row + 2][column + 2][0] === null)
            || (board[row + 2] && board[row + 2][column + 2] && row < 7 && column < 7 && board[row + 1][column + 1][0] === 'O' && board[row + 2][column + 2][0] === null)
            || (board[row + 1] && board[row + 1][column - 1] && board[row + 1][column - 1][0] === null)
            || (board[row + 1] && board[row + 1][column + 1] && board[row + 1][column + 1][0] === null)) {
              return true;
          }
        }
      }
    }
    return false;
  }

  const checkTurnBlack = () => {
    for (let row = 0; row < board.length; row += 1) {
      for (let column = 0; column < board[row].length; column += 1) {
        if (board[row][column][0] === 'o' || board[row][column][0] === 'O') {
          if (board[row][column][0] === 'O') {
            if ((board[row + 2] && board[row + 2][column - 2] && row < 7 && column > 0 && board[row + 1][column - 1][0] === 'X' && board[row + 2][column - 2][0] === null)
            || (board[row + 2] && board[row + 2][column + 2] && row < 7 && column < 7 && board[row + 1][column + 1][0] === 'X' && board[row + 2][column + 2][0] === null)
            || (board[row + 2] && board[row + 2][column - 2] && row < 7 && column > 0 && board[row + 1][column - 1][0] === 'x' && board[row + 2][column - 2][0] === null)
            || (board[row + 2] && board[row + 2][column + 2] && row < 7 && column < 7 && board[row + 1][column + 1][0] === 'x' && board[row + 2][column + 2][0] === null)
            || (board[row + 1] && board[row + 1][column - 1] && board[row + 1][column - 1][0] === null)
            || (board[row + 1] && board[row + 1][column + 1] && board[row + 1][column + 1][0] === null)) {
              return true;
            }
          }
          if ((board[row - 2] && board[row - 2][column - 2] && row > 0 && column > 0 && board[row - 1][column - 1][0] === 'X' && board[row - 2][column - 2][0] === null)
            || (board[row - 2] && board[row - 2][column + 2] && row > 0 && column < 7 && board[row - 1][column + 1][0] === 'X' && board[row - 2][column + 2][0] === null)
            || (board[row - 2] && board[row - 2][column - 2] && row > 0 && column > 0 && board[row - 1][column - 1][0] === 'x' && board[row - 2][column - 2][0] === null)
            || (board[row - 2] && board[row - 2][column + 2] && row > 0 && column < 7 && board[row - 1][column + 1][0] === 'x' && board[row - 2][column + 2][0] === null)
            || (board[row - 1] && board[row - 1][column - 1] && board[row - 1][column - 1][0] === null)
            || (board[row - 1] && board[row - 1][column + 1] && board[row - 1][column + 1][0] === null)) {
              return true;
          }
        }
      }
    }
    return false;
  }

  const checkAutoJumpRed = () => {
    for (let row = 0; row < board.length; row += 1) {
      for (let column = 0; column < board[row].length; column += 1) {
        if (board[row][column][0] === 'x' || board[row][column][0] === 'X') {
          if (board[row][column][0] === 'X') {
            if ((board[row - 2] && board[row - 2][column - 2] && row > 0 && column > 0 && board[row - 1][column - 1][0] === 'o' && board[row - 2][column - 2][0] === null)
              || (board[row - 2] && board[row - 2][column - 2] && row > 0 && column > 0 && board[row - 1][column - 1][0] === 'O' && board[row - 2][column - 2][0] === null)
              || (board[row - 2] && board[row - 2][column + 2] && row > 0 && column < 7 && board[row - 1][column + 1][0] === 'o' && board[row - 2][column + 2][0] === null)
              || (board[row - 2] && board[row - 2][column + 2] && row > 0 && column < 7 && board[row - 1][column + 1][0] === 'O' && board[row - 2][column + 2][0] === null)) {
              setAutoJumpRed(true);
              break;
            }
          }
          if ((board[row + 2] && board[row + 2][column - 2] && row < 7 && column > 0 && board[row + 1][column - 1][0] === 'o' && board[row + 2][column - 2][0] === null)
            || (board[row + 2] && board[row + 2][column - 2] && row < 7 && column > 0 && board[row + 1][column - 1][0] === 'O' && board[row + 2][column - 2][0] === null)
            || (board[row + 2] && board[row + 2][column + 2] && row < 7 && column < 7 && board[row + 1][column + 1][0] === 'o' && board[row + 2][column + 2][0] === null)
            || (board[row + 2] && board[row + 2][column + 2] && row < 7 && column < 7 && board[row + 1][column + 1][0] === 'O' && board[row + 2][column + 2][0] === null)) {
              setAutoJumpRed(true);
              break;
          }
        }
      }
    }
  }

  const checkAutoJumpBlack = () => {
    for (let row = 0; row < board.length; row += 1) {
      for (let column = 0; column < board[row].length; column += 1) {
        if (board[row][column][0] === 'o' || board[row][column][0] === 'O') {
          if (board[row][column][0] === 'O') {
            if ((board[row + 2] && board[row + 2][column - 2] && row < 7 && column > 0 && board[row + 1][column - 1][0] === 'X' && board[row + 2][column - 2][0] === null)
            || (board[row + 2] && board[row + 2][column + 2] && row < 7 && column < 7 && board[row + 1][column + 1][0] === 'X' && board[row + 2][column + 2][0] === null)
            || (board[row + 2] && board[row + 2][column - 2] && row < 7 && column > 0 && board[row + 1][column - 1][0] === 'x' && board[row + 2][column - 2][0] === null)
            || (board[row + 2] && board[row + 2][column + 2] && row < 7 && column < 7 && board[row + 1][column + 1][0] === 'x' && board[row + 2][column + 2][0] === null)) {
              setAutoJumpBlack(true);
              break;
            }
          }
          if ((board[row - 2] && board[row - 2][column - 2] && row > 0 && column > 0 && board[row - 1][column - 1][0] === 'X' && board[row - 2][column - 2][0] === null)
            || (board[row - 2] && board[row - 2][column + 2] && row > 0 && column < 7 && board[row - 1][column + 1][0] === 'X' && board[row - 2][column + 2][0] === null)
            || (board[row - 2] && board[row - 2][column - 2] && row > 0 && column > 0 && board[row - 1][column - 1][0] === 'x' && board[row - 2][column - 2][0] === null)
            || (board[row - 2] && board[row - 2][column + 2] && row > 0 && column < 7 && board[row - 1][column + 1][0] === 'x' && board[row - 2][column + 2][0] === null)) {
              setAutoJumpBlack(true);
              break;
          }
        }
      }
    }
  }

  const jumpCheckRed = (rows, columns) => {
    let isDouble = false;
    if (board[rows][columns][0] === 'X') {
      if ((board[rows - 2] && board[rows - 2][columns - 2] && rows > 0 && columns > 0 && board[rows - 1][columns - 1][0] === 'o' && board[rows - 2][columns - 2][0] === null)
        || (board[rows - 2] && board[rows - 2][columns - 2] && rows > 0 && columns > 0 && board[rows - 1][columns - 1][0] === 'O' && board[rows - 2][columns - 2][0] === null)
        || (board[rows - 2] && board[rows - 2][columns + 2] && rows > 0 && columns < 7 && board[rows - 1][columns + 1][0] === 'o' && board[rows - 2][columns + 2][0] === null)
        || (board[rows - 2] && board[rows - 2][columns + 2] && rows > 0 && columns < 7 && board[rows - 1][columns + 1][0] === 'O' && board[rows - 2][columns + 2][0] === null)) {
        checkNextJumpRed(rows, columns);
        isDouble = true;
      }
    }
    if ((board[rows + 2] && board[rows + 2][columns - 2] && rows < 7 && columns > 0 && board[rows + 1][columns - 1][0] === 'o' && board[rows + 2][columns - 2][0] === null)
      || (board[rows + 2] && board[rows + 2][columns - 2] && rows < 7 && columns > 0 && board[rows + 1][columns - 1][0] === 'O' && board[rows + 2][columns - 2][0] === null)
      || (board[rows + 2] && board[rows + 2][columns + 2] && rows < 7 && columns < 7 && board[rows + 1][columns + 1][0] === 'o' && board[rows + 2][columns + 2][0] === null)
      || (board[rows + 2] && board[rows + 2][columns + 2] && rows < 7 && columns < 7 && board[rows + 1][columns + 1][0] === 'O' && board[rows + 2][columns + 2][0] === null)) {
      checkNextJumpRed(rows, columns);
      isDouble = true;
    }
    return isDouble;
  }

  const jumpCheckBlack = (rows, columns) => {
    let isDouble = false;
    if (board[rows][columns][0] === 'O') {
      if ((board[rows + 2] && board[rows + 2][columns - 2] && rows < 7 && columns > 0 && board[rows + 1][columns - 1][0] === 'x' && board[rows + 2][columns - 2][0] === null)
        || (board[rows + 2] && board[rows + 2][columns - 2] && rows < 7 && columns > 0 && board[rows + 1][columns - 1][0] === 'X' && board[rows + 2][columns - 2][0] === null)
        || (board[rows + 2] && board[rows + 2][columns + 2] && rows < 7 && columns < 7 && board[rows + 1][columns + 1][0] === 'x' && board[rows + 2][columns + 2][0] === null)
        || (board[rows + 2] && board[rows + 2][columns + 2] && rows < 7 && columns < 7 && board[rows + 1][columns + 1][0] === 'X' && board[rows + 2][columns + 2][0] === null)) {
        checkNextJumpBlack(rows, columns);
        isDouble = true;
      }
    }
    if ((board[rows - 2] && board[rows - 2][columns - 2] && rows > 0 && columns > 0 && board[rows - 1][columns - 1][0] === 'x' && board[rows - 2][columns - 2][0] === null)
      || (board[rows - 2] && board[rows - 2][columns - 2] && rows > 0 && columns > 0 && board[rows - 1][columns - 1][0] === 'X' && board[rows - 2][columns - 2][0] === null)
      || (board[rows - 2] && board[rows - 2][columns + 2] && rows > 0 && columns < 7 && board[rows - 1][columns + 1][0] === 'x' && board[rows - 2][columns + 2][0] === null)
      || (board[rows - 2] && board[rows - 2][columns + 2] && rows > 0 && columns < 7 && board[rows - 1][columns + 1][0] === 'X' && board[rows - 2][columns + 2][0] === null)) {
      checkNextJumpBlack(rows, columns);
      isDouble = true;
    }
    return isDouble;
  }

  const moveSelected = (event) => {
    const copy = board.slice();
    const target = event.target.getAttribute('name');
    const rows = Number(target.charAt(0));
    const columns = Number(target.charAt(1));
    const to = copy[rows][columns];
    const from = copy[selected[0]][selected[1]];
    let isDouble = false;
    copy[rows][columns] = from;
    copy[selected[0]][selected[1]] = to;
    copy[rows][columns][1] = 'redSquare';
    copy[selected[0]][selected[1]][2] = '';
    if (turn === 'black') {
      if (rows === 0) {
        copy[rows][columns][0] = 'O';
      }
      if (autoJumpBlack) {
        const rowToDelete = (rows + selected[0]) / 2;
        const columnToDelete = (columns + selected[1]) / 2;
        copy[rowToDelete][columnToDelete] = [null, 'redSquare', ''];
        if (red === 1) {
          setVictory(true);
        } else {
          setRed(red - 1);
          resetBlackJump();
        }
        isDouble = jumpCheckBlack(rows, columns);
      } else {
        resetBlack();
      }
      if (!isDouble) {
        setTurn('red');
        setAutoJumpBlack(false);
        if (checkTurnRed()) {
          checkAutoJumpRed();
        } else {
          setVictory(true);
        }
      }
    } else {
      if (rows === 7) {
        copy[rows][columns][0] = 'X';
      }
      if (autoJumpRed) {
        const rowToDelete = (rows + selected[0]) / 2;
        const columnToDelete = (columns + selected[1]) / 2;
        copy[rowToDelete][columnToDelete] = [null, 'redSquare', ''];
        if (black === 1) {
          setVictory(true);
        } else {
          setBlack(black - 1);
          resetRedJump();
        }
        isDouble = jumpCheckRed(rows, columns);
      } else {
        resetRed();
      }
      if (!isDouble) {
        setTurn('black');
        setAutoJumpRed(false);
        if (checkTurnBlack()) {
          checkAutoJumpBlack();
        } else {
          setVictory(true);
        }
      }
    }
    setBoard(copy);
  }

  const resetRed = () => {
    const copy = board.slice();
    copy[selected[0]][selected[1]][1] = 'redSquare';
    if (selected[0] > 0 && selected[1] > 0 && copy[selected[0] - 1][selected[1] - 1]
      !== undefined && copy[selected[0] - 1][selected[1] - 1][0] === null) {
      copy[selected[0] - 1][selected[1] - 1][1] = 'redSquare';
      copy[selected[0] - 1][selected[1] - 1][2] = '';
    }
    if (selected[0] > 0 && selected[1] < 7 && copy[selected[0] - 1][selected[1] + 1]
      !== undefined && copy[selected[0] - 1][selected[1] + 1][0] === null) {
      copy[selected[0] - 1][selected[1] + 1][1] = 'redSquare';
      copy[selected[0] - 1][selected[1] + 1][2] = '';
    }
    if (selected[0] < 7 && selected[1] > 0 && copy[selected[0] + 1][selected[1] - 1]
      !== undefined && copy[selected[0] + 1][selected[1] - 1][0] === null) {
      copy[selected[0] + 1][selected[1] - 1][1] = 'redSquare';
      copy[selected[0] + 1][selected[1] - 1][2] = '';
    }
    if (selected[0] < 7 && selected[1] < 7 && copy[selected[0] + 1][selected[1] + 1]
      !== undefined && copy[selected[0] + 1][selected[1] + 1][0] === null) {
      copy[selected[0] + 1][selected[1] + 1][1] = 'redSquare';
      copy[selected[0] + 1][selected[1] + 1][2] = '';
    }
    setBoard(copy);
    setSelected([]);
  }

  const resetRedJump = () => {
    const copy = board.slice();
    copy[selected[0]][selected[1]][1] = 'redSquare';
    if (selected[0] > 1 && selected[1] > 1 && copy[selected[0] - 2][selected[1] - 2]
      !== undefined && copy[selected[0] - 2][selected[1] - 2][0] === null) {
      copy[selected[0] - 2][selected[1] - 2][1] = 'redSquare';
      copy[selected[0] - 2][selected[1] - 2][2] = '';
    }
    if (selected[0] > 1 && selected[1] < 6 && copy[selected[0] - 2][selected[1] + 2]
      !== undefined && copy[selected[0] - 2][selected[1] + 2][0] === null) {
      copy[selected[0] - 2][selected[1] + 2][1] = 'redSquare';
      copy[selected[0] - 2][selected[1] + 2][2] = '';
    }
    if (selected[0] < 6 && selected[1] > 1 && copy[selected[0] + 2][selected[1] - 2]
      !== undefined && copy[selected[0] + 2][selected[1] - 2][0] === null) {
      copy[selected[0] + 2][selected[1] - 2][1] = 'redSquare';
      copy[selected[0] + 2][selected[1] - 2][2] = '';
    }
    if (selected[0] < 6 && selected[1] < 6 && copy[selected[0] + 2][selected[1] + 2]
      !== undefined && copy[selected[0] + 2][selected[1] + 2][0] === null) {
      copy[selected[0] + 2][selected[1] + 2][1] = 'redSquare';
      copy[selected[0] + 2][selected[1] + 2][2] = '';
    }
    setBoard(copy);
    setSelected([]);
  }

  const selectRed = (event) => {
    if (turn === 'red') {
      const copy = board.slice();
      const target = event.target.getAttribute('name');
      const columns = Number(target.charAt(1));
      const rows = Number(target.charAt(0));
      if (autoJumpRed) {
        if (selected.length > 0) {
          resetRedJump();
        } else {
          copy[rows][columns][1] = 'selectedPiece';
          if (rows > 1 && columns > 1 && copy[rows - 2][columns - 2] !== undefined && copy[rows - 2][columns - 2][0] === null && copy[rows][columns][0] === 'X' && (copy[rows - 1][columns - 1][0] === 'o' || copy[rows - 1][columns - 1][0] === 'O')) {
            copy[rows - 2][columns - 2][1] = 'selectedSquare';
            copy[rows - 2][columns - 2][2] = 'moveSelected';
          }
          if (rows > 1 && columns < 6 && copy[rows - 2][columns + 2] !== undefined && copy[rows - 2][columns + 2][0] === null && copy[rows][columns][0] === 'X' && (copy[rows - 1][columns + 1][0] === 'o' || copy[rows - 1][columns + 1][0] === 'O')) {
            copy[rows - 2][columns + 2][1] = 'selectedSquare';
            copy[rows - 2][columns + 2][2] = 'moveSelected';
          }
          if (rows < 6 && columns > 1 && copy[rows + 2][columns - 2] !== undefined && copy[rows + 2][columns - 2][0] === null && (copy[rows + 1][columns - 1][0] === 'o' || copy[rows + 1][columns - 1][0] === 'O')) {
            copy[rows + 2][columns - 2][1] = 'selectedSquare';
            copy[rows + 2][columns - 2][2] = 'moveSelected';
          }
          if (rows < 6 && columns < 6 && copy[rows + 2][columns + 2] !== undefined && copy[rows + 2][columns + 2][0] === null && (copy[rows + 1][columns + 1][0] === 'o' || copy[rows + 1][columns + 1][0] === 'O')) {
            copy[rows + 2][columns + 2][1] = 'selectedSquare';
            copy[rows + 2][columns + 2][2] = 'moveSelected';
          }
          setSelected([rows, columns]);
        }
      } else if (selected.length > 0) {
        resetRed();
      } else {
        copy[rows][columns][1] = 'selectedPiece';
        if (rows > 0 && columns > 0 && copy[rows - 1][columns - 1]
          !== undefined && copy[rows - 1][columns - 1][0] === null && copy[rows][columns][0] === 'X') {
          copy[rows - 1][columns - 1][1] = 'selectedSquare';
          copy[rows - 1][columns - 1][2] = 'moveSelected';
        }
        if (rows > 0 && columns < 7 && copy[rows - 1][columns + 1]
          !== undefined && copy[rows - 1][columns + 1][0] === null && copy[rows][columns][0] === 'X') {
          copy[rows - 1][columns + 1][1] = 'selectedSquare';
          copy[rows - 1][columns + 1][2] = 'moveSelected';
        }
        if (rows < 7 && columns > 0 && copy[rows + 1][columns - 1]
          !== undefined && copy[rows + 1][columns - 1][0] === null) {
          copy[rows + 1][columns - 1][1] = 'selectedSquare';
          copy[rows + 1][columns - 1][2] = 'moveSelected';
        }
        if (rows < 7 && columns < 7 && copy[rows + 1][columns + 1]
          !== undefined && copy[rows + 1][columns + 1][0] === null) {
          copy[rows + 1][columns + 1][1] = 'selectedSquare';
          copy[rows + 1][columns + 1][2] = 'moveSelected';
        }
        setSelected([rows, columns]);
      }
      setBoard(copy);
    }
  }

  const resetBlack = () => {
    const copy = board.slice();
    copy[selected[0]][selected[1]][1] = 'redSquare';
    if (selected[0] > 0 && selected[1] > 0 && copy[selected[0] - 1][selected[1] - 1]
      !== undefined && copy[selected[0] - 1][selected[1] - 1][0] === null) {
      copy[selected[0] - 1][selected[1] - 1][1] = 'redSquare';
      copy[selected[0] - 1][selected[1] - 1][2] = '';
    }
    if (selected[0] > 0 && selected[1] < 7 && copy[selected[0] - 1][selected[1] + 1]
      !== undefined && copy[selected[0] - 1][selected[1] + 1][0] === null) {
      copy[selected[0] - 1][selected[1] + 1][1] = 'redSquare';
      copy[selected[0] - 1][selected[1] + 1][2] = '';
    }
    if (selected[0] < 7 && selected[1] > 0 && copy[selected[0] + 1][selected[1] - 1]
      !== undefined && copy[selected[0] + 1][selected[1] - 1][0] === null) {
      copy[selected[0] + 1][selected[1] - 1][1] = 'redSquare';
      copy[selected[0] + 1][selected[1] - 1][2] = '';
    }
    if (selected[0] < 7 && selected[1] < 7 && copy[selected[0] + 1][selected[1] + 1]
      !== undefined && copy[selected[0] + 1][selected[1] + 1][0] === null) {
      copy[selected[0] + 1][selected[1] + 1][1] = 'redSquare';
      copy[selected[0] + 1][selected[1] + 1][2] = '';
    }
    setBoard(copy);
    setSelected([]);
  }

  const resetBlackJump = () => {
    const copy = board.slice();
    copy[selected[0]][selected[1]][1] = 'redSquare';
    if (selected[0] > 1 && selected[1] > 1 && copy[selected[0] - 2][selected[1] - 2]
      !== undefined && copy[selected[0] - 2][selected[1] - 2][0] === null) {
      copy[selected[0] - 2][selected[1] - 2][1] = 'redSquare';
      copy[selected[0] - 2][selected[1] - 2][2] = '';
    }
    if (selected[0] > 1 && selected[1] < 6 && copy[selected[0] - 2][selected[1] + 2]
      !== undefined && copy[selected[0] - 2][selected[1] + 2][0] === null) {
      copy[selected[0] - 2][selected[1] + 2][1] = 'redSquare';
      copy[selected[0] - 2][selected[1] + 2][2] = '';
    }
    if (selected[0] < 6 && selected[1] > 1 && copy[selected[0] + 2][selected[1] - 2]
      !== undefined && copy[selected[0] + 2][selected[1] - 2][0] === null) {
      copy[selected[0] + 2][selected[1] - 2][1] = 'redSquare';
      copy[selected[0] + 2][selected[1] - 2][2] = '';
    }
    if (selected[0] < 6 && selected[1] < 6 && copy[selected[0] + 2][selected[1] + 2]
      !== undefined && copy[selected[0] + 2][selected[1] + 2][0] === null) {
      copy[selected[0] + 2][selected[1] + 2][1] = 'redSquare';
      copy[selected[0] + 2][selected[1] + 2][2] = '';
    }
    setBoard(copy);
    setSelected([]);
  }

  const selectBlack = (event) => {
    if (turn === 'black') {
      const copy = board.slice();
      const target = event.target.getAttribute('name');
      const columns = Number(target.charAt(1));
      const rows = Number(target.charAt(0));
      if (autoJumpBlack) {
        if (selected.length > 0) {
          resetBlackJump();
        } else {
          copy[rows][columns][1] = 'selectedPiece';
          if (rows > 1 && columns > 1 && copy[rows - 2][columns - 2] !== undefined && copy[rows - 2][columns - 2][0] === null && (copy[rows - 1][columns - 1][0] === 'x' || copy[rows - 1][columns - 1][0] === 'X')) {
            copy[rows - 2][columns - 2][1] = 'selectedSquare';
            copy[rows - 2][columns - 2][2] = 'moveSelected';
          }
          if (rows > 1 && columns < 6 && copy[rows - 2][columns + 2] !== undefined && copy[rows - 2][columns + 2][0] === null && (copy[rows - 1][columns + 1][0] === 'x' || copy[rows - 1][columns + 1][0] === 'X')) {
            copy[rows - 2][columns + 2][1] = 'selectedSquare';
            copy[rows - 2][columns + 2][2] = 'moveSelected';
          }
          if (rows < 6 && columns > 1 && copy[rows + 2][columns - 2] !== undefined && copy[rows + 2][columns - 2][0] === null && copy[rows][columns][0] === 'O' && (copy[rows + 1][columns - 1][0] === 'x' || copy[rows + 1][columns - 1][0] === 'X')) {
            copy[rows + 2][columns - 2][1] = 'selectedSquare';
            copy[rows + 2][columns - 2][2] = 'moveSelected';
          }
          if (rows < 6 && columns < 6 && copy[rows + 2][columns + 2] !== undefined && copy[rows + 2][columns + 2][0] === null && copy[rows][columns][0] === 'O' && (copy[rows + 1][columns + 1][0] === 'x' || copy[rows + 1][columns + 1][0] === 'X')) {
            copy[rows + 2][columns + 2][1] = 'selectedSquare';
            copy[rows + 2][columns + 2][2] = 'moveSelected';
          }
          setSelected([rows, columns]);
        }
      } else if (selected.length > 0) {
        resetBlack();
      } else {
        copy[rows][columns][1] = 'selectedPiece';
        if (rows > 0 && columns > 0 && copy[rows - 1][columns - 1]
          !== undefined && copy[rows - 1][columns - 1][0] === null) {
          copy[rows - 1][columns - 1][1] = 'selectedSquare';
          copy[rows - 1][columns - 1][2] = 'moveSelected';
        }
        if (rows > 0 && columns < 7 && copy[rows - 1][columns + 1]
          !== undefined && copy[rows - 1][columns + 1][0] === null) {
          copy[rows - 1][columns + 1][1] = 'selectedSquare';
          copy[rows - 1][columns + 1][2] = 'moveSelected';
        }
        if (rows < 7 && columns > 0 && copy[rows + 1][columns - 1]
          !== undefined && copy[rows + 1][columns - 1][0] === null && copy[rows][columns][0] === 'O') {
          copy[rows + 1][columns - 1][1] = 'selectedSquare';
          copy[rows + 1][columns - 1][2] = 'moveSelected';
        }
        if (rows < 7 && columns < 7 && copy[rows + 1][columns + 1]
          !== undefined && copy[rows + 1][columns + 1][0] === null && copy[rows][columns][0] === 'O') {
          copy[rows + 1][columns + 1][1] = 'selectedSquare';
          copy[rows + 1][columns + 1][2] = 'moveSelected';
        }
        setSelected([rows, columns]);
      }
      setBoard(copy);
    }
  }

  const whichPiece = (square, index, i) => {
    if (square[0] === null) {
      return null;
    }
    return (
      <img name={`${index}${i}`} className="piece" alt="" src={`https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/${square[0] === 'x' ? 'redPiece' : square[0] === 'X' ? 'kingRedPiece' : square[0] === 'O' ? 'kingBlackPiece' : 'blackPiece'}.png`} />
    );
  };

  return (
    <div className="checkersWidget">
      <h3 className="skillTitle">{`${turn === 'black' ? 'Black' :  'Red'}'s turn...`}</h3>
      {board.map((row, index) => (
        <div className="grid" key={`row ${Math.random() * 1000}`}>
          {row.map((square, i) => (
            <div
              onClick={square[2] === 'selectRed' ? selectRed : square[2] === 'selectBlack' ? selectBlack : square[2] === 'moveSelected' ? moveSelected : null}
              onKeyPress={square[2] === 'selectRed' ? selectRed : square[2] === 'selectBlack' ? selectBlack : square[2] === 'moveSelected' ? moveSelected : null}
              name={`${index}${i}`}
              className={square[1]}
              key={`square ${Math.random() * 1000}`}
            >
              {whichPiece(square, index, i)}
            </div>
          ))}
        </div>
      ))}
      <Jump
        nextJump={nextJump}
        toggleJump={toggleJump}
        skipJump={skipJump}
      />
      <Victory
        victory={victory}
        turn={turn}
        resetBoard={resetBoard}
        toggleVictory={toggleVictory}
      />
    </div>
  );
};

export default Board;
