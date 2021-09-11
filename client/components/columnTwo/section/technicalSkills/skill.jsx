import React from 'react';
import HigherOrderFunctionSkill from './higherOrderFunctionSkill/higherOrderFunctionSkill';
import DatabaseManagementSkill from './databaseManagementSkill/databaseManagementSkill';

const Skill = ({ skill }) => {
  if (skill === 0) {
    return (
      <DatabaseManagementSkill />
    );
  }
  return (
    <HigherOrderFunctionSkill />
  );
};

export default Skill;
