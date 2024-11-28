import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut,FiSettings,FiShoppingCart,FiSearch,FiMenu,} from 'react-icons/fi';
import './Navbar.css';
import { TextLogo, ButtonForm } from '../../theme/styledcomponents';

interface NavbarViewProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const NavbarView: React.FC<NavbarViewProps> = ({ isLoggedIn, onLogout }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsModalOpen(false); // Cerramos el modal al cambiar a vista desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearchClick = () => {
    navigate('/search');
  };

  const handleMenuClick = () => {
    if (isMobile) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-logo">
          <Link to="/" aria-label="Go to the homepage">
            <TextLogo>{isMobile ? 'Capsule' : 'Capsule Corp'}</TextLogo>
          </Link>
        </div>

        <div className="navbar-links">
          {isLoggedIn ? (
            <>
              <div
                className="navbar-icons"
                onClick={handleSearchClick}
                aria-label="Search products"
              >
                <FiSearch className="section-navbar-icon" />
              </div>
              <div
                className="navbar-icons"
                aria-label="View shopping cart"
                onClick={() => navigate('/cart')}
              >
                <FiShoppingCart className="section-navbar-icon" />
              </div>
              <div
                className="navbar-icons"
                aria-label="Settings"
                onClick={() => navigate('/profile-page')}
              >
                <FiSettings className="section-navbar-icon" />
              </div>
              <div
                className="navbar-icons"
                onClick={onLogout}
                aria-label="Log out"
              >
                <FiLogOut className="section-navbar-icon" />
              </div>
              {isMobile && (
                <div
                  id="navbar-icons-cellphone"
                  onClick={handleMenuClick}
                  aria-label="Open menu"
                >
                  <FiMenu className="section-navbar-icon-cellphone" />
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/login" aria-label="Go to login">
                <ButtonForm variant="purpleForm">Login</ButtonForm>
              </Link>
              <Link to="/register" aria-label="Go to register">
                <ButtonForm variant="grayhomeForm">Register</ButtonForm>
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Modal */}
      {isMobile && isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div
              className="navbar-icons-cellphone"
              onClick={() => {
                handleSearchClick();
                closeModal();
              }}
              aria-label="Search products"
            >
              <p className='text-icon-modal-nav'>
                Search
              </p>
            </div>
            <div
              className="navbar-icons-cellphone"
              aria-label="View Dashboard"
              onClick={() => {
                navigate('/dashboard');
                closeModal();
              }}
            >
              <p className='text-icon-modal-nav'>
                Dashboard
              </p>
            </div>
            <div
              className="navbar-icons-cellphone"
              aria-label="View your catalogue"
              onClick={() => {
                navigate('/catalogue');
                closeModal();
              }}
            >
              <p className='text-icon-modal-nav'>
                Catalogue
              </p>
            </div>
            <div
              className="navbar-icons-cellphone"
              aria-label="View tournaments"
              onClick={() => {
                navigate('/tournaments');
                closeModal();
              }}
            >
              <p className='text-icon-modal-nav'>
                Tournaments
              </p>
            </div>
            <div
              className="navbar-icons-cellphone"
              aria-label="View tournaments"
              onClick={() => {
                navigate('/purchases');
                closeModal();
              }}
            >
              <p className='text-icon-modal-nav'>
                Purchases
              </p>
            </div>
            <div
              className="navbar-icons-cellphone"
              aria-label="View shopping cart"
              onClick={() => {
                navigate('/cart');
                closeModal();
              }}
            >
              <p className='text-icon-modal-nav'>
                Shopping Cart
              </p>
            </div>
            <div
              className="navbar-icons-cellphone"
              aria-label="Settings"
              onClick={() => {
                navigate('/profile-page');
                closeModal();
              }}
            >
              <p className='text-icon-modal-nav'>
                Settings
              </p>
            </div>
            <div
              className="navbar-icons-cellphone"
              aria-label="View tournaments"
              onClick={() => {
                navigate('/about');
                closeModal();
              }}
            >
              <p className='text-icon-modal-nav'>
                About Us
              </p>
            </div>
            <div
              className="navbar-icons-cellphone"
              onClick={() => {
                onLogout();
                closeModal();
              }}
              aria-label="Log out"
            >
              <p className='text-icon-modal-nav'>
                Log Out
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarView;