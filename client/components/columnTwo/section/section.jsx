import React from 'react';
import About from './about';
import Education from './education';
import Experience from './experience';
import TechnicalSkills from './technicalSkills/technicalSkills';

const Section = ({ darkMode, section }) => {
  if (section === 0) {
    return (
      <About darkMode={darkMode} />
    );
  } else if (section === 1) {
    return (
      <Education darkMode={darkMode} />
    );
  } else if (section === 2) {
    return (
      <Experience darkMode={darkMode} />
    );
  }
  return (
    <TechnicalSkills darkMode={darkMode} />
  );
};

export default Section;
