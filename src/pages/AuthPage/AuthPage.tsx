import { Link } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div>
      <h1>Welcome to Card Trader</h1>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>
    </div>
  );
};

export default AuthPage;
