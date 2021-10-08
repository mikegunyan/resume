import React, { useState, useEffect, useRef } from 'react';

const TypeText = () => {
  let text = 'Software Engineer';
  const index = useRef(0);
  const [string, setString] = useState('');

  useEffect(() => {
    index.current = 0;
    setString('');
  }, [text]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setString((typedString) => typedString + text.charAt(index.current));
      index.current++;
    }, 150);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [string, text]);

  return (
    <div className="nameBox">
      <div className="title">{string}</div>
    </div>
  );
};

export default TypeText;
