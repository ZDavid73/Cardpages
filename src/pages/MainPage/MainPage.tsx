import React from 'react';
import {Navbar} from '../../components/imports';
import HomePage from '../HomePage/HomePage';

interface HomePageProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const MainPage: React.FC<HomePageProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />

      {isLoggedIn ? (
        <div>
          <h2>Welcome to the platform!</h2>
          <ul>
            <li>Ver Torneos</li>
            <li>Ver Cartas</li>
            <li>Comprar</li>
            <li>Vender Cartas</li>
            <li>Crear Torneos</li>
          </ul>
        </div>
      ) : (
        <div>
          <HomePage></HomePage>
        </div>
      )}
    </div>
  );
};

export default MainPage;