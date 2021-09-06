import React from 'react';
import ColumnOne from './columnOne';
import ColumnTwo from './columnTwo';

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
