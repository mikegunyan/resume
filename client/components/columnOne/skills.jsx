import React, { useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'Javascript', 'React', 'Webpack', 'Babel', 'Express', 'Axios', 'Node', 'MySql', 'PostgreSql', 'MongoDB', 'AWS', 'Docker', 'Jest', 'Enzyme', 'Github'])
  return (
    <div>
      <h2 className="header">Technical Skills</h2>
      <div className="skillsList">
        {skills.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
