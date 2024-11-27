import { NavLink, useNavigate } from "react-router-dom"; 
import { Button, Container, Text } from "../../theme/styledcomponents";
import './Profile.css';
import { useSelector } from "react-redux";
import { AppState } from "../../types/stateType";

const Profile = () => {
    const user = useSelector((state: AppState) => state.user);
    const navigate = useNavigate(); 

    return (
        <Container variant='small' className="profile-container">

            <section
                className="profile-info"
                onClick={() => navigate('/profile-page')} 
                style={{ cursor: 'pointer' }} 
            >
                <img src={user.picture} alt="Profile" />
                <div className="profile-info-text">
                    <Text variant="white">Welcome, {user.username}!</Text>
                    <Text variant="purple">Level {user.level.toString().padStart(2, '0')}</Text>
                </div>
            </section>

            <section className="profile-links">
                <NavLink to='/dashboard'>
                    {({ isActive }) => <Button variant={isActive ? 'purple' : 'gray'}>Dashboard</Button>}
                </NavLink>
                <NavLink to='/catalogue'>
                    {({ isActive }) => <Button variant={isActive ? 'purple' : 'gray'}>Your Catalogue</Button>}
                </NavLink>
                <NavLink to='/tournaments'>
                    {({ isActive }) => <Button variant={isActive ? 'purple' : 'gray'}>Tournaments</Button>}
                </NavLink>
                <NavLink to='/purchases'>
                    {({ isActive }) => <Button variant={isActive ? 'purple' : 'gray'}>Your Purchases</Button>}
                </NavLink>
                <NavLink to='/about'>
                    {({ isActive }) => <Button variant={isActive ? 'purple' : 'gray'}>About</Button>}
                </NavLink>
            </section>
            
        </Container>
    )
}

export default Profile;
