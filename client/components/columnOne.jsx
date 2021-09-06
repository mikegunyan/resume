import React, { useState, useEffect } from 'react';
import TypeText from './typeText';
import ContactCard from './contactCard';
import Skills from './skills';

const ColumnOne = () => {
  const [head, setHead] = useState(false);
  const completePre = (pre) => {
    setHead(true);
  }

  return (
    <div className="ColumnOne">
      <img className="profilePicture" src="images/mike.jpg" />
      <TypeText className="head" preIsComplete={true} text="Michael Gunyan" completePre={completePre} />
      <TypeText className="title" preIsComplete={head} text="Software Engineer" completePre={completePre} />
      <ContactCard />
      <Skills />
    </div>
  );
};

export default ColumnOne;
