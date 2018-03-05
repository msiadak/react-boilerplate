import React from 'react';
import { hot } from 'react-hot-loader';
import Reboot from 'material-ui/Reboot';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme();

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Reboot />
    <div>Hello world!</div>
  </MuiThemeProvider>
);

export default hot(module)(App);
