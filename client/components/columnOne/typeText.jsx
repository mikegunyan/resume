import React, { useState, useEffect, useRef } from 'react';

const TypeText = ({ className, preIsComplete, text, completePre, darkMode }) => {
  const whichClass = () => {
    if (darkMode) {
      if (className === 'name') {
        return 'block black'
      }
      return 'altBlock black'
    } else {
      if (className === 'name') {
        return 'block white'
      }
      return 'altBlock white'
    }
  };
  if (preIsComplete) {
    const index = useRef(0);
    const [string, setString] = useState('');
    const [block, setBlock] = useState(true);

    useEffect(() => {
      index.current = 0;
      setString('');
    }, [text]);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setString((typedString) => typedString + text.charAt(index.current));
        index.current++;
      }, 150);
      if (string.length === text.length) {
        setBlock(false);
        completePre(className);
      }
      return () => {
        clearTimeout(timeoutId);
      };
    }, [string, text]);
    if (block) {
      return (
        <div className="nameBox">
          <div className={whichClass()}>&#9615;</div>
          <div className={darkMode ? `${className} dark` : className}>{string}&#9615;</div>
        </div>
      )
    }
    return (
      <div className="nameBox">
        <div className={whichClass()}>&#9615;</div>
        <div className={darkMode ? `${className} dark` : className}>{string}</div>
      </div>
    )
  }
  return (
    <div className="nameBox">
      <div className={whichClass()}>&#9615;</div>
      <div className={darkMode ? 'title black' : 'title white'}>placeholder&#9615;</div>
    </div>
  )
};

export default TypeText;
