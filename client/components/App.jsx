import React from 'react';
import ColumnOne from './columnOne/columnOne';
import ColumnTwo from './columnTwo/columnTwo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      darkMode: false
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    const { darkMode } = this.state;
    console.log(darkMode)
    this.setState({ darkMode: !darkMode });
  }

  render() {
    const { darkMode } = this.state;
    return (
      <div className={darkMode ? 'page dark' : 'page'}>
        <ColumnOne toggleDarkMode={this.toggleDarkMode} darkMode={darkMode} />
        <ColumnTwo darkMode={darkMode} />
      </div>
    );
  }
}

export default App;
