import React from 'react';
import { render } from 'react-dom';
import './index.scss';

import { UserProvider } from './context/user.context';
import { CoursesProvider } from './context/courses.context';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cart.context';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <CoursesProvider>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </CoursesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
