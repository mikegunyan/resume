import React, { useState, useEffect } from 'react';

const SectionTabs = ({ darkMode, sections, changeSection }) => {
  const [skillsSectionClass, setSkillsSectionClass] = useState(darkMode ? 'darkSectionTab' : 'sectionTab');
  const [skillsSectionFlash, setSkillsSectionFlash] = useState(true);

  useEffect(() => {
    if (skillsSectionFlash) {
      const timeoutId = setTimeout(() => {
        if (skillsSectionClass === 'sectionTab' || skillsSectionClass === 'darkSectionTab') {
          setSkillsSectionClass(darkMode ? 'darkSectionTab flashTab' : 'sectionTab flashTab');
        } else {
          setSkillsSectionClass(darkMode ? 'darkSectionTab' : 'sectionTab');
        }
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      const timeoutId = setTimeout(() => {
        setSkillsSectionClass(darkMode ? 'darkSectionTab' : 'sectionTab');
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [skillsSectionClass]);

  return (
    <div className="sectionTabs">
      <button className={sections[0] ? darkMode ? 'darkActiveSectionTab' : 'activeSectionTab' : darkMode ? 'darkSectionTab' : 'sectionTab'} onClick={() => changeSection(0)}>About</button>
      <button className={sections[1] ? darkMode ? 'darkActiveSectionTab' : 'activeSectionTab' : darkMode ? 'darkSectionTab' : 'sectionTab'} onClick={() => changeSection(1)}>Education</button>
      <button className={sections[2] ? darkMode ? 'darkActiveSectionTab' : 'activeSectionTab' : darkMode ? 'darkSectionTab' : 'sectionTab'} onClick={() => changeSection(2)}>Experience</button>
      <button className={sections[3] ? darkMode ? 'darkActiveSectionTab' : 'activeSectionTab' : skillsSectionFlash ?  skillsSectionClass : darkMode ? 'darkSectionTab' : 'sectionTab'} onClick={() => {changeSection(3); setSkillsSectionFlash(false);}}>Technical Skills</button>
    </div>
  );
};

export default SectionTabs;
