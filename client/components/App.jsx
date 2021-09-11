import React from 'react';
import ColumnOne from './columnOne/columnOne';
import ColumnTwo from './columnTwo/columnTwo';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="page">
        <ColumnOne />
        <ColumnTwo />
      </div>
    );
  }
}

export default App;
