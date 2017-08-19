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

    this.update = this.update.bind(this);
  }

  update(event) {
    console.log('Update @ App');

  }

  render() {
    // MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <HomeCalculatorTabsControl model={this.state.model} update={this.update} />
      </MuiThemeProvider>
    )
  }
}

export default App;
