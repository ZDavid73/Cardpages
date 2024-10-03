import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaCog, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import './Navbar.css'; 
import { TextLogo, Button } from '../../theme/styledcomponents'; 

interface NavbarViewProps {
  isLoggedIn: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  onLogout: () => void;
}

const NavbarView: React.FC<NavbarViewProps> = ({
  isLoggedIn,
  searchQuery,
  setSearchQuery,
  handleSearch,
  onLogout,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <TextLogo>{isMobile ? 'Corp' : 'Capsule Corp'}</TextLogo>
        </Link>
      </div>
      {isLoggedIn && (
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Cards"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      )}

      <div className="navbar-links">
        {isLoggedIn ? (
          <>
            <Link to="/sell">Vender</Link>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
            <Link to="/settings">
              <FaCog />
            </Link>
            <button onClick={onLogout}>
              <FaSignOutAlt />
            </button>
          </>
        ) : (
          <>
            <Link to="/login"> 
              <Button variant="purple">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="gray">Register</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavbarView;