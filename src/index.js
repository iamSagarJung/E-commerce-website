import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './store/context/product-context';
import { SortProvier } from './store/context/SortContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
      <SortProvier>
      <App />
      </SortProvier>
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);


