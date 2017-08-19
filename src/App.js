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

  update(event, value) {
    /*
    *
    * */
    console.log('Update @ App');

    const model = this.state.model;

    model[value.id] = value.value;

    // Recalculate and Refresh
    model.calculate();

    // re-render
    // this.forceUpdate();

    this.setState({
      model: model
    })
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
