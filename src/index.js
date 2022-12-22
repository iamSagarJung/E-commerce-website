import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './store/context/product-context';
import { SortProvier } from './store/context/SortContext';
import { CartProvider } from './store/context/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
      <SortProvier>
        <CartProvider>
        <App />
        </CartProvider>
      </SortProvier>
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);


