import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; // Importa el nuevo hook
import RegisterView from './RegisterView';

interface RegisterProps {
  onRegister: () => void; // Aceptamos el prop onRegister
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const { error, handleRegister } = useAuth(); // Obtén error y la función handleRegister
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <RegisterView
      email={email}
      password={password}
      error={error}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(email, password, onRegister); // Llama a handleRegister
      }}
    />
  );
};

export default Register;