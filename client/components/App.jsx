import React from 'react';
import axios from 'axios';
import Navigator from './navigator/navigator';
import Home from './home/home';
import About from './about/about';
import Education from './education/education';
import Experience from './experience/experience';
import Portfolio from './portfolio/portfolio';
import ContactMe from './contactMe/contactMe';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      documentHeight: 0,
      windowTop: true,
      navigatorClass: 'lightInitialNavigator',
      darkmode: false,
      theme: {
        initialNavigator: 'lightInitialNavigator',
        navigator: 'lightNavigator',
        home: 'lightHome',
        about: 'lightAbout',
        education: 'lightEducation',
        experience: 'lightExperience',
        portfolio: 'lightPortfolio',
        contactMe: 'lightContactMe'
      }
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  componentDidMount() {
    axios.get('/visitors')
    this.setState({ documentHeight: document.body.offsetHeight });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { theme } = this.state;
    if (event.path[1].pageYOffset > 10) {
      this.setState({ navigatorClass: `${theme.initialNavigator} ${theme.navigator}`, windowTop: false });
    } else {
      this.setState({ navigatorClass: `${theme.initialNavigator}`, windowTop: true });
    }
  }

  setTheme(theme) {
    const { windowTop } = this.state;
    if (theme === 'lightTheme') {
      this.setState({ theme: {
        initialNavigator: 'lightInitialNavigator',
        navigator: `lightNavigator`,
        home: 'lightHome',
        about: 'lightAbout',
        education: 'lightEducation',
        experience: 'lightExperience',
        portfolio: 'lightPortfolio',
        contactMe: 'lightContactMe'
      }, navigatorClass: `lightInitialNavigator${windowTop ? '' : ' lightNavigator'}` })
    } else {
      this.setState({ theme: {
        initialNavigator: 'darkInitialNavigator',
        navigator: `darkNavigator`,
        home: 'darkHome',
        about: 'darkAbout',
        education: 'darkEducation',
        experience: 'darkExperience',
        portfolio: 'darkPortfolio',
        contactMe: 'darkContactMe'
      }, navigatorClass: `darkInitialNavigator${windowTop ? '' : ' darkNavigator'}` })
    }
  }

  toggleDarkMode() {
    const { darkmode } = this.state;
    this.setState({ darkmode: !darkmode });
    this.setTheme(`${darkmode ? 'light' : 'dark'}Theme`)
  }

  render() {
    const { documentHeight, navigatorClass, theme } = this.state;
    return (
      <div onScroll={this.handleScroll}>
        <Navigator documentHeight={documentHeight} navigatorClass={navigatorClass} toggleDarkMode={this.toggleDarkMode} />
        <Home theme={theme.home} />
        <About theme={theme.about} />
        <Education theme={theme.education} />
        <Experience theme={theme.experience} />
        <Portfolio theme={theme.portfolio} />
        <ContactMe theme={theme.contactMe} />
      </div>
    );
  }
}

export default App;
