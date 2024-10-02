import Navbar from '../../components/Navbar/Navbar';

const HomePage = ({ isLoggedIn, onLogout }: { isLoggedIn: boolean; onLogout: () => void }) => {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <h1>Welcome to Card Trader</h1>
      <p>Please login or register to start trading cards!</p>
    </div>
    

  );
};

export default HomePage;