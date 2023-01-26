import React from 'react';
import { render } from 'react-dom';
import './index.scss';

import { UserProvider } from './context/user.context';
import { ProductsProvider } from './context/products.context';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
