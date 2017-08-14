import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider'

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const NAME = "Shelton Space";

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

class SliderControlled extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    }
    //  This binding is necessary to make 'this' work in the callback
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange = (event, value) => {
    this.setState({value: value})
  };

  render() {
    return (
      <div>
        <Slider value={this.state.value}
                min={this.props.min}
                max={this.props.max}
                onChange={this.handleSliderChange} />
        <p>
          <span>{this.props.name}</span>
          <span>{': '}</span>
          <span>{this.state.value}</span>
        </p>
      </div>
    )
  }
}

function TabsExampleSimple(props) {
  return <Tabs>
    <Tab label="About Me">
      <div>
        <h2 style={styles.headline}>Tab One</h2>

        <SliderControlled name="sliderSavingAvailable"
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

function Welcome(props) {
  return <h1>Hello</h1>
}

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <TabsExampleSimple />
  </MuiThemeProvider>
);

export default App;

// class Model extends Component {
//
// };
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React, {NAME}, what is happening.</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
