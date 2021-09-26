import React, { useState, useEffect, useRef } from 'react';

const TypeText = ({ className, preIsComplete, text, completePre, darkMode }) => {
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
          <div className={className === 'name' ? 'block' : 'altBlock'}>&#9615;</div>
          <div className={className}>{string}&#9615;</div>
        </div>
      )
    }
    return (
      <div className="nameBox">
        <div className={className === 'name' ? 'block' : 'altBlock'}>&#9615;</div>
        <div className={className}>{string}</div>
      </div>
    )
  }
  return (
    <div className="nameBox">
      <div className={className === 'title' ? 'altBlock white' : 'altBlock black'}>&#9615;</div>
      <div className={className === 'title' ? 'title white' : 'title black'}>placeholder&#9615;</div>
    </div>
  )
};

export default TypeText;
