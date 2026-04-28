import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import { CartProvider } from './context/CartContext.jsx';
import { CatalogProvider } from './context/CatalogContext.jsx';
import { BlogProvider } from './context/BlogContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <CatalogProvider>
          <BlogProvider>
            <App />
          </BlogProvider>
        </CatalogProvider>
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);
