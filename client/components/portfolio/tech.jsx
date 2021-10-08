import * as React from 'react';
import HigherOrderFunction from './higherOrderFunction/higherOrderFunction';
import DatabaseManagement from './databaseManagement/databaseManagement';
import Checkers from './checkers/checkers';
import PyramidDescentPuzzle from './pyramidDescentPuzzle/pyramidDescentPuzzle';

const Tech = ({ tech }) => {
  if (tech === 'Higher Order Components') {
    return (
      <div className="techBox">
        <HigherOrderFunction />
      </div>
    );
  }
  if (tech === 'Database Management') {
    return (
      <div className="techBox">
        <DatabaseManagement />
      </div>
    );
  }
  if (tech === 'Checkers') {
    return (
      <div className="techBox">
        <Checkers />
      </div>
    );
  }
  if (tech === 'Pyramid Descent Puzzle') {
    return (
      <div className="techBox">
        <PyramidDescentPuzzle />
      </div>
    );
  }
  return null;
};

export default Tech;
