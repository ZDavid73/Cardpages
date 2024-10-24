import React from 'react';
import NavbarView from './NavbarView';
import { useAuth } from '../../hooks/useAuth';

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const {handleLogout} = useAuth();

  return (
    <NavbarView
      isLoggedIn={isLoggedIn}
      onLogout={() => handleLogout()}
    />
  );
};

export default Navbar;