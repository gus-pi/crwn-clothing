import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context.tsx';
import { ProductsProvider } from './context/products.context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
