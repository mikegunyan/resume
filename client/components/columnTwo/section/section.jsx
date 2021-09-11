import React from 'react';
import About from './about';
import Education from './education';
import Experience from './experience';
import TechnicalSkills from './technicalSkills/technicalSkills';

const Section = ({ section }) => {
  if (section === 0) {
    return (
      <About />
    );
  } else if (section === 1) {
    return (
      <Education />
    );
  } else if (section === 2) {
    return (
      <Experience />
    );
  }
  return (
    <TechnicalSkills />
  );
};

export default Section;
