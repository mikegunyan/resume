import React, { useState } from 'react';

const Education = ({ darkMode }) => {
  const [certView, setCertView] = useState('cert');
  const changeCertView = () => {
    if (certView === 'cert') {
      setCertView('certZoom');
    } else {
      setCertView('cert');
    }
  };
  if (certView === 'cert') {
    return (
      <div className={darkMode ? 'darkSection' : 'section'}>
        <h3 className={darkMode ? 'darkHeader' : 'header'}>Advanced Software Engineering Immersive</h3>
        <ul>
          <li>Hack Reactor</li>
          <li>2021</li>
        </ul>
        <img onMouseOver={changeCertView} className={certView} src="https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/certificateSEIHackReactor.jpg" />
        <h3 className={darkMode ? 'darkHeader' : 'header'}>General Studies</h3>
        <ul>
          <li>Southern New Hampshire University</li>
          <li>2019 - Present</li>
        </ul>
      </div>
    );
  }
  return (
    <div className={darkMode ? 'darkSection' : 'section'}>
      <h3 className={darkMode ? 'darkHeader' : 'header'}>Advanced Software Engineering Immersive</h3>
      <img onMouseOut={changeCertView} className={certView} src="https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/certificateSEIHackReactor.jpg" />
    </div>
  );
};

export default Education;
