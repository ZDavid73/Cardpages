import { createBrowserRouter, RouterProvider, Navigate, Outlet, Routes, Route } from 'react-router-dom';
import { HomePage, SearchPage } from '../pages/imports';
import { Login, Navbar, Register } from '../components/imports';
import { useState } from 'react';
import { clearAuthUserId, getAuthUserId } from '../utils/storage';
import MainPage from '../pages/MainPage/MainPage';
import Catalogue from '../pages/Catalogue/Catalogue';
import Purchases from '../pages/Purchases/Purchases';
import About from '../pages/About/About';
import Tournament from '../pages/TournamentPage/TournamentPage';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(getAuthUserId() ? true : false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    clearAuthUserId();
  };

  return (
    <Router>
      <>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
        
        
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route path="/home" element={<HomePage isLoggedIn={isLoggedIn} />} />


          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/tournaments" element={<Tournament />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchPage isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register onRegister={handleLogin} />} />
          </Routes>
      </>
    </Router>
  )
}

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(getAuthUserId() ? true : false);

  const user = useSelector((state) => state.user);

  console.log(user);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    clearAuthUserId();
  };



  const router = createBrowserRouter([
    {
      path: '/', 
      element: <><Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout}/><Outlet/></>, 
      children: [
        {
          index: true, 
          element: <MainPage isLoggedIn={isLoggedIn}/>,
        },
        {
          path: 'catalogue',
          element: <Catalogue/>,
        },
        {
          path: 'purchases',
          element: <Purchases/>, 
        },
        {
          path: 'tournaments',
          element: <Tournament/>,
        },
        {
          path: 'about',
          element: <About/>,
        }
      ],
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