import React, { useState, useEffect } from 'react';

const SectionTabs = ({ sections, changeSection }) => {
  const [skillsSectionClass, setSkillsSectionClass] = useState('sectionTab');
  const [skillsSectionFlash, setSkillsSectionFlash] = useState(true);

  useEffect(() => {
    if (skillsSectionFlash) {
      const timeoutId = setTimeout(() => {
        if (skillsSectionClass === 'sectionTab') {
          setSkillsSectionClass('sectionTab flashTab');
        } else {
          setSkillsSectionClass('sectionTab');
        }
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      const timeoutId = setTimeout(() => {
        setSkillsSectionClass('sectionTab');
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [skillsSectionClass]);

  return (
    <div className="sectionTabs">
      <button className={sections[0] ? 'activeSectionTab' : 'sectionTab'} onClick={() => changeSection(0)}>About</button>
      <button className={sections[1] ? 'activeSectionTab' : 'sectionTab'} onClick={() => changeSection(1)}>Education</button>
      <button className={sections[2] ? 'activeSectionTab' : 'sectionTab'} onClick={() => changeSection(2)}>Experience</button>
      <button className={sections[3] ? 'activeSectionTab' : skillsSectionClass} onClick={() => {changeSection(3); setSkillsSectionFlash(false);}}>Technical Skills</button>
    </div>
  );
};

export default SectionTabs;
