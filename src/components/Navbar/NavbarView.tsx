import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaCog, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import './Navbar.css'; 
import { TextLogo, Button } from '../../theme/styledcomponents'; 

interface NavbarViewProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const NavbarView: React.FC<NavbarViewProps> = ({
  isLoggedIn,
  onLogout,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate(); // Hook para redirección

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Función para redirigir a la página de búsqueda
  const handleSearchClick = () => {
    navigate('/search'); // Redirige a la ruta "/search" que corresponde a `SearchPage`
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <TextLogo>{isMobile ? 'Capsule' : 'Capsule Corp'}</TextLogo>
        </Link>
      </div>

      <div className="navbar-links">
        {isLoggedIn ? (
          <>
          <Button variant='purple' onClick={handleSearchClick}><FaSearch/></Button>
          <Button variant='gray'><FaShoppingCart/></Button>
          <Button variant='gray'><FaCog/></Button>
          <Button variant='gray' onClick={onLogout}><FaSignOutAlt/></Button>
          </>
        ) : (
          <>
            <Link to="/login"> 
              <Button variant="purple">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="grayhome">Register</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavbarView;
