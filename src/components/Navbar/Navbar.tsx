import React from 'react';
import NavbarView from './NavbarView';

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {

  return (
    <NavbarView
      isLoggedIn={isLoggedIn}
      onLogout={onLogout}
    />
  );
};

export default Navbar;