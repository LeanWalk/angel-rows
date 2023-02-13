import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';

import App from './App';
import { CartProvider } from './contexts/cart.context';
import { store } from './store/store'
import { stripePromise } from './utils/stripe/stripe.utils';

import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
  <CartProvider>
  <Elements stripe={stripePromise}>
  <App />
  </Elements>
  </CartProvider>
  </BrowserRouter>  
  </Provider>
  </React.StrictMode>,
);