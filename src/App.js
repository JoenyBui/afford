import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import {muiTheme} from './ConfigStyles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import HomeCalculator from './HomeCalculator';
import HomeCalculatorTabsControl from './TabsControl';


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
        <HomeCalculatorTabsControl />
      </MuiThemeProvider>
    )
  }
}

export default App;
