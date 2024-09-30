import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/AuthService';
import RegisterView from './RegisterView';

interface RegisterProps {
  onRegister: () => void; // Aceptamos el prop onRegister
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await registerUser(email, password);

      if (user) {
        onRegister(); // Llamamos a la función onRegister después de un registro exitoso
        navigate('/login'); 
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to register');
      } else {
        setError('Failed to register');
      }
    }
  };

  return (
    <RegisterView
      email={email}
      password={password}
      error={error}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSubmit={handleRegister}
    />
  );
};

export default Register;