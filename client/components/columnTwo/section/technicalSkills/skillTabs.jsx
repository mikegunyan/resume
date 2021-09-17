import React, { useState, useEffect } from 'react';

const SkillTabs = ({ skills, changeSkill }) => {
  const [skillsTabClass, setSkillsTabClass] = useState('skillTab');
  const [skillsTabFlash, setSkillsTabFlash] = useState(true);

  useEffect(() => {
    if (skillsTabFlash) {
      const timeoutId = setTimeout(() => {
        if (skillsTabClass === 'skillTab') {
          setSkillsTabClass('skillTab flashTab');
        } else {
          setSkillsTabClass('skillTab');
        }
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      const timeoutId = setTimeout(() => {
        setSkillsTabClass('skillTab');
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [skillsTabClass]);

  return (
    <div className="skillTabs">
      <button className={skills[0] ? 'activeSkillTab' : 'skillTab'} onClick={() => changeSkill(0)}>Database Management</button>
      <button className={skills[1] ? 'activeSkillTab' : skillsTabClass} onClick={() => {changeSkill(1); setSkillsTabFlash(false);}}>Higher Order Components</button>
      <button className={skills[2] ? 'activeSkillTab' : 'skillTab'} onClick={() => changeSkill(2)}>Pyramid Descent Puzzle</button>
      <button className={skills[3] ? 'activeSkillTab' : 'skillTab'} onClick={() => changeSkill(3)}>Checkers</button>
    </div>
  );
};

export default SkillTabs;
