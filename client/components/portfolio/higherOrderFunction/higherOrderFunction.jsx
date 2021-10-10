import React from 'react';
import ClickCounter from './clickCounter';
import HoverCounter from './hoverCounter';
import ChangeCounter from './changeCounter';

const HigherOrderFunction = () => {
  return (
    <div className="skillColumnTwo">
      <h1 className="skillTitle">Higher Order Components</h1>
      <div className="counterWidgets">
        <ClickCounter />
        <HoverCounter />
        <ChangeCounter />
      </div>
      <h3>Description</h3>
      <p>A Higher order function (HOC) is used to reuse similar functionality between similar components. The three components above share the same state and functions. However, they maintain their own state. In this case, the state and functionality are defined in the withCounter function which is called when exporting each component. The function withCounter takes the component and adds the state and function to it before adding an updated component to the DOM.</p>
    </div>
  );
};

export default HigherOrderFunction;
