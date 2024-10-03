import React from 'react';
import {Navbar} from '../../components/imports';
import Carousel from '../../components/Carousel/Carousel';
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
          <h2>Please login or register to continue.</h2>
          <Carousel></Carousel>
        </div>
      )}
    </div>
  );
};

export default MainPage;