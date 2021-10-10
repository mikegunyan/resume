import React, { useState } from 'react';

const withCounter = (WrappedComponent) => {
  const WithCounter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = (direction) => {
      if (direction === 'up') {
        setCount(count + 1)
      } else if (direction === 'down') {
        if (count > 0) {
          setCount(count - 1);
        } else {
          setCount(0);
        }
      } else {
        setCount(0);
      }
    };
    return (
      <WrappedComponent count={count} incrementCount={incrementCount} />
    );
  }
  return WithCounter;
};

export default withCounter;
