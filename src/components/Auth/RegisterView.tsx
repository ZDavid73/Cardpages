import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
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
    <div className="divregister" style={{backgroundImage: `url('https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Img%20login%20register/register%20(1).webp')`}}>
      <form onSubmit={onSubmit}>
      <Link to="/">
          <TextLogo className='loginfont'>{'Capsule Corp'}</TextLogo>
      </Link>
      <Tittle variant="white">Register</Tittle>
      {error && <Text variant="purple">{error}</Text>}

        <Input
          type="text"
          variant="searchwhite"
          value={username}
          onChange={onUserChange}
          placeholder="Username"
          required
        />
        <Input
          type="email"
          variant="searchwhite"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          required
        />
        <Input
          type="password"
          variant="searchwhite"
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