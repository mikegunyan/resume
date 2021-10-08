import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TypeText from './typeText';
import DarkMode from './darkMode';
import { Link } from 'react-scroll'

const Navigator = ({ navigatorClass, toggleDarkMode }) => {
  return (
    <div className={navigatorClass}>
      <div className="nameCard">
        Michael Gunyan
        <TypeText />
      </div>
      <div className="navCard">
        <button className="navButton" onClick={() => window.scrollTo({ top: 0 })}>Home</button>
        <button className="navButton" onClick={() => window.scrollTo({ top: 350 })}>About</button>
        <button className="navButton" onClick={() => window.scrollTo({ top: 1150 })}>Education</button>
        <button className="navButton" onClick={() => window.scrollTo({ top: 1950 })}>Experience</button>
        <button className="navButton" onClick={() => window.scrollTo({ top: 2950 })}>Portfolio</button>
        <button className="navButton" onClick={() => window.scrollTo({ top: 3500 })}>Contact Me</button>
      </div>
      <DarkMode toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Navigator;
