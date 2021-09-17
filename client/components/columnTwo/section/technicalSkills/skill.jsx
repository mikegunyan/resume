import React from 'react';
import HigherOrderFunctionSkill from './higherOrderFunctionSkill/higherOrderFunctionSkill';
import DatabaseManagementSkill from './databaseManagementSkill/databaseManagementSkill';
import PyramidDescentPuzzleSkill from './pyramidDescentPuzzleSkill/pyramidDescentPuzzleSkill';
import CheckersSkill from './checkersSkill/checkersSkill';

const Skill = ({ skill }) => {
  if (skill === 0) {
    return (
      <DatabaseManagementSkill />
    );
  } else if (skill === 1) {
    return (
      <HigherOrderFunctionSkill />
    );
  } else if (skill === 2) {
    return (
      <PyramidDescentPuzzleSkill />
    );
  }
  return (
    <CheckersSkill />
  );
};

export default Skill;
