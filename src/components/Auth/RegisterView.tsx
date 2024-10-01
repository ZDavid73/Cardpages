import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { Button, Input, Tittle, Text } from '../../theme/styledcomponents'; 
import './RegisterView.css';

interface RegisterViewProps {
  email: string;
  password: string;
  error: string | null;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RegisterView: React.FC<RegisterViewProps> = ({
  email,
  password,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) => {
  return (
    <div className="divregister">
      <Tittle variant="gray">Register</Tittle>

      {error && <Text variant="gray">{error}</Text>}
      
      <form onSubmit={onSubmit}>
        <Input
          type="email"
          variant="searchgray" 
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          required
        />
        
        <Input
          type="password"
          variant="searchgray"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          required
        />
        
        <Button variant="green" type="submit">Register</Button>
      </form>

      <Text variant="gray">
        Already have an account? <Link to="/login">Log in here</Link>
      </Text>
    </div>
  );
};

export default RegisterView;
