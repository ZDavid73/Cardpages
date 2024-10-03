import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button, Input, Tittle, Text, TextLogo } from '../../theme/styledcomponents'; 
import './RegisterView.css';

interface RegisterViewProps {
  email: string;
  password: string;
  username: string;
  error: string | null;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUserChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RegisterView: React.FC<RegisterViewProps> = ({
  email,
  password,
  error,
  username,
  onUserChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) => {
  return (
    <div 
      className="divregister" 
      role="form" 
      aria-labelledby="registerTitle"
      aria-describedby="registerInstructions"
      style={{backgroundImage: `url('https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Img%20login%20register/register%20(1).webp')`}}
    >
      <form onSubmit={onSubmit}>
        <Link to="/">
          <TextLogo className='loginfont'>{'Capsule Corp'}</TextLogo>
        </Link>
        
        <Tittle id="registerTitle" variant="white">Register</Tittle>

        {error && (
          <Text variant="purple" role="alert" aria-live="assertive">{error}</Text>
        )}

        <Input
          type="text"
          variant="searchwhite"
          value={username}
          onChange={onUserChange}
          placeholder="Username"
          aria-label="Username"
          aria-required="true"
          required
        />

        <Input
          type="email"
          variant="searchwhite"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          aria-label="Email"
          aria-required="true"
          required
        />

        <Input
          type="password"
          variant="searchwhite"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          aria-label="Password"
          aria-required="true"
          required
        />
        
        <Button variant="purple" type="submit" aria-label="Register">Register</Button>
        
        <Text variant="gray" id="registerInstructions">
          Already have an account? <Link to="/login">Log in here</Link>
        </Text>
      </form>
    </div>
  );
};

export default RegisterView;