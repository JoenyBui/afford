import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './App.css';

// import {muiTheme} from '../ConfigStyles';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
// import { MuiThemeProvider as V0MuiThemeProvider} from '@material-ui';
// import getMuiTheme from '@material-ui/styles/getMuiTheme';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import HomeCalculator from '../HomeCalculator';
import HomeCalculatorTabsControl from '../components/TabsControl/TabsControl';

// const theme = createMuiTheme({
//   /* theme for v1.x */
//  });
//  const themeV0 = getMuiTheme({
//   /* theme for v0.x */
//  });

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
      <HomeCalculatorTabsControl model={this.state.model} update={this.update} />
    )
  }
}

export default App;
