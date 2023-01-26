import React from 'react';
import { render } from 'react-dom';
import './index.scss';

import { UserProvider } from './context/user.context';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
