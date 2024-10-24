import { Navigate, Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage, SearchPage } from '../pages/imports';
import { Login, Navbar, Register } from '../components/imports';
import { useState } from 'react';
import { clearAuthUserId, getAuthUserId } from '../utils/storage';
import Catalogue from '../pages/Catalogue/Catalogue';
import Purchases from '../pages/Purchases/Purchases';
import About from '../pages/About/About';
import Tournament from '../pages/TournamentPage/TournamentPage';
import { useSelector } from 'react-redux';
import ProtectedRoutes from './ProtectedRoutes';
import Dashboard from '../pages/Dashboard/Dashboard';

const AppRouter = () => {
  const user = useSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(user.id !== "" ? true : false);

  console.log(isLoggedIn);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    clearAuthUserId();
  };

  return (
    <BrowserRouter>
      <>
        <Navbar isLoggedIn={isLoggedIn}/>
        
        
        <Routes>
          <Route path="/" element={!isLoggedIn ? <HomePage/> : <Navigate to="/dashboard"/>} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard/> : <Navigate to="/"/>} />

          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register onRegister={handleLogin} />} />

          <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn}/>}>
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/tournaments" element={<Tournament />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<SearchPage/>} />
            
          </Route>
          </Routes>
      </>
    </BrowserRouter>
  )
}

export default AppRouter;