import React from 'react';
import {Navbar} from '../../components/imports';

interface HomePageProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ isLoggedIn, onLogout }) => {
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
          <h2>Please login or register to continue.</h2>
        </div>
      )}
    </div>
  );
};

export default HomePage;
