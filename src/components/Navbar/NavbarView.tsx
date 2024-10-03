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
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-logo">
        <Link to="/" aria-label="Ir a la página principal">
          <TextLogo>{isMobile ? 'Capsule' : 'Capsule Corp'}</TextLogo>
        </Link>
      </div>
      {isLoggedIn && (
        <form className="navbar-search" onSubmit={handleSearch} aria-label="Buscar">
          <input
            type="text"
            placeholder="Search Cards"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Buscar tarjetas"
          />
          <button type="submit" aria-label="Buscar">
            <FaSearch />
          </button>
        </form>
      )}

      <div className="navbar-links">
        {isLoggedIn ? (
          <>
            <Link to="/sell" aria-label="Ir a vender">Vender</Link>
            <Link to="/cart" aria-label="Ir al carrito">
              <FaShoppingCart />
              <span className="sr-only">Carrito</span> {/* Texto oculto para accesibilidad */}
            </Link>
            <Link to="/settings" aria-label="Ir a configuraciones">
              <FaCog />
              <span className="sr-only">Configuraciones</span> {/* Texto oculto para accesibilidad */}
            </Link>
            <button onClick={onLogout} aria-label="Cerrar sesión">
              <FaSignOutAlt />
              <span className="sr-only">Cerrar sesión</span> {/* Texto oculto para accesibilidad */}
            </button>
          </>
        ) : (
          <>
            <Link to="/login" aria-label="Ir a iniciar sesión"> 
              <Button variant="purple">Login</Button>
            </Link>
            <Link to="/register" aria-label="Ir a registrarse">
              <Button variant="grayhome">Register</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default NavbarView;