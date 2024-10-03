import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button, Input, Tittle, Text, TextLogo } from '../../theme/styledcomponents'; 
import './LoginView.css';


interface LoginViewProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  error: string | null;
  handleLogin: (e: React.FormEvent) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ email, setEmail, password, setPassword, error, handleLogin }) => {
  return (
    <div className="divlogin" style={{backgroundImage: `url('https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Img%20login%20register/login%20(1).webp')`,}}>
      <form onSubmit={handleLogin}>
        <Link to="/">
          <TextLogo className='loginfont'>{'Capsule Corp'}</TextLogo>
        </Link>
        <Tittle variant="white">Log in to your account</Tittle>

        {error && <Text variant="purple">{error}</Text>}
        
        <Input
          type="email"
          variant="searchwhite" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        
        <Input
          type="password"
          variant="searchwhite"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        
        <Button variant="purple" type="submit">Login</Button>
        
        <Text variant="white">
          Don't have an account? <Link to="/register"> Create one here</Link>
        </Text>
      </form>
    </div>
  );
};
export default LoginView;