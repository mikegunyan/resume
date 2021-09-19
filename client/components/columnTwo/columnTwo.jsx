import React, { useState } from 'react';
import SectionTabs from './sectionTabs';
import Section from './section/section';

const ColumnTwo = () => {
  const [sections, setSections] = useState([true, false, false, false]); // set sections[0] to the only true element
  const changeSection = (section) => {
    const newSections = [false, false, false, false];
    newSections[section] = true;
    setSections(newSections);
  };
  return (
    <div className="columnTwo">
      <SectionTabs sections={sections} changeSection={changeSection} />
      <Section section={sections.indexOf(true)} />
    </div>
  );
};

export default ColumnTwo;
