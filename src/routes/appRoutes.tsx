import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { HomePage, SearchPage } from '../pages/imports';
import { Login, Register } from '../components/imports';
import { useState } from 'react';

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage isLoggedIn={isLoggedIn} onLogout={handleLogout} />,
    },
    {
      path: '/search',
      element: <SearchPage isLoggedIn={isLoggedIn} onLogout={handleLogout} />,
    },
    {
      path: '/login',
      element: isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />,
    },
    {
      path: '/register',
      element: isLoggedIn ? <Navigate to="/" /> : <Register onRegister={handleLogin} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;