import React, { useState } from 'react';
import TypeText from './typeText';
import ContactCard from './contactCard';
import Skills from './skills';

const ColumnOne = ({ toggleDarkMode, darkMode }) => {
  const [name, setName] = useState(false);
  const completePre = (pre) => {
    setName(true);
  }

  return (
    <div className="columnOne">
      <label className="switch">
        <input type="checkbox" onClick={toggleDarkMode}></input>
        <span className="slider round"></span>
      </label>
      <img className="profilePicture" src="https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/mike.jpg" />
      <TypeText className={darkMode ? 'name dark' : 'name'} darkMode={darkMode} preIsComplete={true} text="Michael Gunyan" completePre={completePre} />
      <TypeText className={darkMode ? 'title dark' : 'title'} darkMode={darkMode} preIsComplete={name} text="Software Engineer" completePre={completePre} />
      <ContactCard darkMode={darkMode} />
      <Skills darkMode={darkMode} />
    </div>
  );
};

export default ColumnOne;
