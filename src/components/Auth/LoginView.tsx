import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import { Button, Input, Tittle, Text } from '../../theme/styledcomponents'; 

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
    <div>
      <Tittle variant="white">Login</Tittle>

      {error && <Text variant="purple">{error}</Text>}
      
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          variant="searchgray" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        
        <Input
          type="password"
          variant="searchgray"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        
        <Button variant="purple" type="submit">Login</Button>
      </form>
      
      <Text variant="white">
        Don't have an account? <Link to="/register">Create one here</Link>
      </Text>
    </div>
  );
};

export default LoginView;