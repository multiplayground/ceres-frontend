import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
/* eslint-disable-next-line  import/no-extraneous-dependencies */
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';

const theme = createMuiTheme({});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>{routes}</Router>
    </ThemeProvider>
  );
}
