import { NavLink } from "react-router-dom";
import { Button, Container } from "../../theme/styledcomponents";
import './Profile.css';

const Profile = () => {
    return (
        <Container variant='small' className="profile">
            <NavLink to='/'>
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
        </Container>
    )
}

export default Profile;