import React from 'react';
import axios from 'axios';
import ColumnOne from './columnOne/columnOne';
import ColumnTwo from './columnTwo/columnTwo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visitors: 0,
      darkMode: true
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.getVisitors = this.getVisitors.bind(this);
  }

  componentDidMount() {
    this.getVisitors();
  }

  getVisitors() {
    axios.get('/visitors')
      .then((data) => this.setState({ visitors: data.data[0].count }))
      .catch((err) => console.log(err));
  }

  toggleDarkMode() {
    const { darkMode } = this.state;
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
