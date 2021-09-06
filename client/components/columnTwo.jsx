import React, { useState } from 'react';
import Section from './section';

const ColumnTwo = ({ columnOneIsComplete }) => {
  const [sections, setSections] = useState([true, false, false, false]);
  const changeSection = (section) => {
    const newSections = [false, false, false, false];
    newSections[section] = true;
    setSections(newSections);
  };

  return (
    <div className="ColumnTwo">
      <div className="sectionTabs">
        <button className={sections[0] ? 'activeTab' : 'tab'} onClick={() => changeSection(0)}>About</button>
        <button className={sections[1] ? 'activeTab' : 'tab'} onClick={() => changeSection(1)}>Education</button>
        <button className={sections[2] ? 'activeTab' : 'tab'} onClick={() => changeSection(2)}>Experience</button>
        <button className={sections[3] ? 'activeTab' : 'tab'} onClick={() => changeSection(3)}>Technical Skills</button>
      </div>
      <Section section={sections.indexOf(true)} />
    </div>
  );
};

export default ColumnTwo;
