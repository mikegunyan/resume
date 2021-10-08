import React, { useState } from 'react';

const About = ({ theme }) => {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'Javascript', 'React', 'Webpack', 'Babel', 'Express', 'Axios', 'Node', 'MySql', 'PostgreSql', 'MongoDB', 'AWS', 'Docker', 'Jest', 'Enzyme', 'Github'])
  return (
    <div className={theme}>
      <img className="picture" src="https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/mike.jpg" />
      <div className="about">
        <div className="paragraph">
          <h2>About Me</h2>
          <p>I am a family man and I am passionate about making life fun and exciting for both me and my family. I’ve had the privilege of serving as a Marine and still currently serve in the reserves. Now, I’m looking forward to a future as a software developer.</p>
          <p>For most of my life I have enjoyed solving problems and find satisfaction in achieving my goals. I love working with numbers and clever challenges intrigue me. It’s also very fun to work with a team and learn from people and all their unique backgrounds.</p>
        </div>
        <div className="skills">
          <h2>Technical Skills</h2>
          <div className="technicalSkills">
            {skills.map((skill) => (
              <div key={skill}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
