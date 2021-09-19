import React, { useState } from 'react';
import SkillTabs from './skillTabs';
import Skill from './skill';

const TechnicalSkills = () => {
  const [skills, setSkills] = useState([true, false, false, false]); // set sections[0] to the only true element
  const changeSkill = (skill) => {
    const newSkills = [false, false, false, false];
    newSkills[skill] = true;
    setSkills(newSkills);
  };
  return (
    <div className="section">
      <div className="skillsSection">
        <SkillTabs skills={skills} changeSkill={changeSkill} />
        <Skill skill={skills.indexOf(true)} />
      </div>
    </div>
  );
};

export default TechnicalSkills;
