import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button, Input, Tittle, Text, Container } from '../../theme/styledcomponents'; 
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
    <div className="split-container">
      <div className="left-panel">
        <Container variant="big">
          <Tittle variant="purple">Hello, welcome!</Tittle>
          {error && <Text variant="purple">{error}</Text>}
          <form onSubmit={onSubmit}>
            <Input
              type="email"
              variant="searchgray"
              value={email}
              onChange={onEmailChange}
              placeholder="Email address"
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
            <Button variant="purple" type="submit">Sign up</Button>
          </form>
          <Text variant="gray">
            Already have an account? <Link to="/login">Log in here</Link>
          </Text>
        </Container>
      </div>
      <div className="right-panel">
      </div>
    </div>
  );
};

export default RegisterView;

