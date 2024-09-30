import React from 'react';
import NavbarView from './NavbarView';
import useNavbar from '../../hooks/useNavbar';

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
  const { searchQuery, setSearchQuery, handleSearch } = useNavbar();

  return (
    <NavbarView
      isLoggedIn={isLoggedIn}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      handleSearch={handleSearch}
      onLogout={onLogout}
    />
  );
};

export default Navbar;