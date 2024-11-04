import { Navigate, Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage, SearchPage } from '../pages/imports';
import { Login, Navbar, Register } from '../components/imports';
import Catalogue from '../pages/Catalogue/Catalogue';
import Purchases from '../pages/Purchases/Purchases';
import AboutPage from '../pages/About/About';
import Tournament from '../pages/TournamentPage/TournamentPage';
import { useSelector } from 'react-redux';
import ProtectedRoutes from './ProtectedRoutes';
import Dashboard from '../pages/Dashboard/Dashboard';
import { AppState } from '../types/stateType';
import SellPage from '../pages/SellPage/SellPage';

const AppRouter = () => {
  const user = useSelector((state: AppState) => state.user);
  const isLoggedIn = user.id !== "" ? true : false;

  return (
    <BrowserRouter>
      <>
        <Navbar isLoggedIn={isLoggedIn}/>
        
        
        <Routes>
          <Route path="/" element={!isLoggedIn ? <HomePage/> : <Navigate to="/dashboard"/>} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard/> : <Navigate to="/"/>} />

          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register/>} />

          <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn}/>}>
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/tournaments" element={<Tournament />} />
            <Route path="/about" element={< SellPage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            
          </Route>
          </Routes>
      </>
    </BrowserRouter>
  )
}

export default AppRouter;