import React from 'react';
import HigherOrderFunctionSkill from './higherOrderFunctionSkill/higherOrderFunctionSkill';
import DatabaseManagementSkill from './databaseManagementSkill/databaseManagementSkill';
import PyramidDescentPuzzleSkill from './pyramidDescentPuzzleSkill/pyramidDescentPuzzleSkill';

const Skill = ({ skill }) => {
  if (skill === 0) {
    return (
      <DatabaseManagementSkill />
    );
  } else if (skill === 1) {
    return (
      <HigherOrderFunctionSkill />
    );
  }
  return (
    <PyramidDescentPuzzleSkill />
  );
};

export default Skill;
