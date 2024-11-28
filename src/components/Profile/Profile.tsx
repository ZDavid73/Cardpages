import { NavLink, useNavigate } from "react-router-dom"; 
import { Button, Container, Text } from "../../theme/styledcomponents";
import './Profile.css';
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";
import { FiGrid, FiSidebar, FiUsers, FiShoppingBag, FiInfo } from "react-icons/fi";

const Profile = () => {
    const user = useSelector((state: AppState) => state.user);
    const navigate = useNavigate(); 

    return (
        <Container variant='profile' className="profile-container">

            <section
                className="profile-info"
                onClick={() => navigate('/profile-page')} 
                style={{ cursor: 'pointer' }} 
            >
                <img 
                src={user.picture} alt="Profile" 
                style={{
                    width: '4.5vw',
                    height: '4.5vw',
                    borderRadius: '150px',
                    marginRight: '6%',
                  }}
                />
                <div className="profile-info-text">
                    <Text variant="white">Welcome, {user.username}!</Text>
                    <Text variant="purple">Level {user.level.toString().padStart(2, '0')}</Text>
                </div>
            </section>

            <section className="profile-links">
                <NavLink to='/dashboard'>
                    {({ isActive }) => 
                        <Button 
                            className='profile-button' 
                            variant={isActive ? 'purple' : 'gray'}
                            aria-label="Go to Dashboard"
                        >
                            <FiGrid className="profile-icons" />
                            Dashboard
                        </Button>
                    }
                </NavLink>
                <NavLink to='/catalogue'>
                    {({ isActive }) => 
                        <Button 
                            className='profile-button' 
                            variant={isActive ? 'purple' : 'gray'}
                            aria-label="View Your Catalogue"
                        >
                            <FiSidebar className="profile-icons" />
                            Your Catalogue
                        </Button>
                    }
                </NavLink>
                <NavLink to='/tournaments'>
                    {({ isActive }) => 
                        <Button 
                            className='profile-button' 
                            variant={isActive ? 'purple' : 'gray'}
                            aria-label="Join Tournaments"
                        >
                            <FiUsers className="profile-icons" />
                            Tournaments
                        </Button>
                    }
                </NavLink>
                <NavLink to='/purchases'>
                    {({ isActive }) => 
                        <Button 
                            className='profile-button' 
                            variant={isActive ? 'purple' : 'gray'}
                            aria-label="View Your Purchases"
                        >
                            <FiShoppingBag className="profile-icons" />
                            Your Purchases
                        </Button>
                    }
                </NavLink>
                <NavLink to='/about'>
                    {({ isActive }) => 
                        <Button 
                            className='profile-button' 
                            variant={isActive ? 'purple' : 'gray'}
                            aria-label="Learn More About Us"
                        >
                            <FiInfo className="profile-icons" />
                            About
                        </Button>
                    }
                </NavLink>
            </section>
            
        </Container>
    )
}

export default Profile;