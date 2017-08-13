import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


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

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="My AppBar" />
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
