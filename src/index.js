import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';

/* eslint-disable-next-line  react/jsx-filename-extension */
ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
