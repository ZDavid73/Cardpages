import Navbar from '../../components/Navbar/Navbar';
import Profile from '../../components/Profile/Profile';

const HomePage = ({ isLoggedIn, onLogout }: { isLoggedIn: boolean; onLogout: () => void }) => {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Profile></Profile>
    </div>
    

  );
};

export default HomePage;