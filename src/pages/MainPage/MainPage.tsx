import React from 'react';
import HomePage from '../HomePage/HomePage';
import Profile from '../../components/Profile/Profile';

interface HomePageProps {
  isLoggedIn: boolean;
}

const MainPage: React.FC<HomePageProps> = ({ isLoggedIn }) => {
  return (
    <div>

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