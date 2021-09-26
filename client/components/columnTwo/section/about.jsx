import React from 'react';

const About = ({ darkMode }) => {
  return (
    <div className={darkMode ? 'darkSection' : 'section'}>
      <p>I am a family man and I am passionate about making life fun and exciting for both me and my family. I’ve had the privilege of serving as a Marine and still currently serve in the reserves. Now, I’m looking forward to a future as a software developer.</p>
      <p>For most of my life I have enjoyed solving problems and find satisfaction in achieving my goals. I love working with numbers and clever challenges intrigue me. It’s also very fun to work with a team and learn from people and all their unique backgrounds.</p>
    </div>
  );
};

export default About;
