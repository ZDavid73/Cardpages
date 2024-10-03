import React from 'react';
import {Navbar} from '../../components/imports';
import HomePage from '../HomePage/HomePage';
import Profile from '../../components/Profile/Profile';

interface HomePageProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const MainPage: React.FC<HomePageProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />

      {isLoggedIn ? (
        <Profile/>
      ) : (
        <div>
          <HomePage></HomePage>
        </div>
      )}
    </div>
  );
};

export default MainPage;