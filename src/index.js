import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import UserContext, { UserProvider } from './data/context/userContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
