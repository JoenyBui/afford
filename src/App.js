import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import {Tabs, Tab} from 'material-ui/Tabs';

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import HomeCalculator from './HomeCalculator';
import SlideControl from './SliderControl';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

function TabsExampleSimple(props) {
  return <Tabs>
    <Tab label="About Me">
      <div>
        <h2 style={styles.headline}>Tab One</h2>

        <SlideControl name="sliderSavingAvailable"
                          name={'Spacing Available'}
                          min={0}
                          max={40000}
                          step={500}
                          value={2000}/>
      </div>
    </Tab>

    <Tab label="My Mortgage Plan">
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>

    <Tab
      label="onActive"
      data-route="/home"
      onActive={handleActive}>
      <div>
        <h2 style={styles.headline}>Assumptions</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: new HomeCalculator()
    };
  }

  render() {
    // MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <TabsExampleSimple />
      </MuiThemeProvider>
    )
  }
}

export default App;
