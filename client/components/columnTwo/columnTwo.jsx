import React, { useState } from 'react';
import SectionTabs from './sectionTabs';
import Section from './section/section';

const ColumnTwo = ({ darkMode }) => {
  const [sections, setSections] = useState([true, false, false, false]); // set sections[0] to the only true element
  const changeSection = (section) => {
    const newSections = [false, false, false, false];
    newSections[section] = true;
    setSections(newSections);
  };
  return (
    <div className="columnTwo">
      <SectionTabs darkMode={darkMode} sections={sections} changeSection={changeSection} />
      <Section darkMode={darkMode} section={sections.indexOf(true)} />
    </div>
  );
};

export default ColumnTwo;
