import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './redux/configureStore';

const theme = createMuiTheme({});

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>{routes}</Router>
      </ThemeProvider>
    </Provider>
  );
}
