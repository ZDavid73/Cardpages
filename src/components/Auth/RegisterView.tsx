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
      <form onSubmit={onSubmit}>
      <Tittle variant="white">Register</Tittle>
      {error && <Text variant="purple">{error}</Text>}
      
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
        <Button variant="purple" type="submit">Register</Button>
      <Text variant="gray">
        Already have an account? <Link to="/login">Log in here</Link>
      </Text>
      </form>
    </div>
  );
};

export default RegisterView;