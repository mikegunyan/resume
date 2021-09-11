import React, { useState } from 'react';
import TypeText from './typeText';
import ContactCard from './contactCard';
import Skills from './skills';

const ColumnOne = () => {
  const [name, setName] = useState(false);
  const completePre = (pre) => {
    setName(true);
  }

  return (
    <div className="ColumnOne">
      <img className="profilePicture" src="images/mike.jpg" />
      <TypeText className="name" preIsComplete={true} text="Michael Gunyan" completePre={completePre} />
      <TypeText className="title" preIsComplete={name} text="Software Engineer" completePre={completePre} />
      <ContactCard />
      <Skills />
    </div>
  );
};

export default ColumnOne;
