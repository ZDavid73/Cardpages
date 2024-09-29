import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaCog, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import './Navbar.css'; 

const Navbar = ({ isLoggedIn, onLogout }: { isLoggedIn: boolean; onLogout: () => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`); 
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Capsule Corp</Link> 
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
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
