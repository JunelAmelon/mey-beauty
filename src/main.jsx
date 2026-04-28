import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import { CartProvider } from './context/CartContext.jsx';
import { CatalogProvider } from './context/CatalogContext.jsx';
import { BlogProvider } from './context/BlogContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <CatalogProvider>
        <BlogProvider>
          <App />
        </BlogProvider>
      </CatalogProvider>
    </CartProvider>
  </React.StrictMode>
);
