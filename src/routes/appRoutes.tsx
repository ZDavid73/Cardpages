import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { SearchPage } from '../pages/imports';
import { Login, Register } from '../components/imports';
import { useState } from 'react';
import MainPage from '../pages/MainPage/MainPage';
import Profile from '../components/Profile/Profile';

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
      element: <MainPage isLoggedIn={isLoggedIn} onLogout={handleLogout} />,
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
    {
      path: '/catalogue',
      element: <Profile/>,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;