import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/AuthService';

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string, onLogin: () => void) => {
    try {
      const user = await loginUser(email, password);
      if (user) {
        onLogin(); // Lógica cuando el login es exitoso
        navigate('/'); // Redirigir a la página principal
      } else {
        setError('Failed to login. Please check your credentials.');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Invalid email or password');
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  const handleRegister = async (email: string, password: string, username: string, onRegister: () => void) => {
    try {
      const user = await registerUser(email, password, username, '');
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

  return { error, handleLogin, handleRegister };
};