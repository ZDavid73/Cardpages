import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/AuthService';
import { clearAuthUserId, setAuthUserId } from '../utils/storage';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/auth/userSlice';
import { getUserInfo } from '../services/databaseService';


export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (email: string, password: string, onLogin: () => void) => {
    try {
      const user = await loginUser(email, password);
      if (user) {
        onLogin();
        navigate('/'); 

        const actualUser = await getUserInfo(user.id);
         if (actualUser) {
          dispatch(login(actualUser));
        }

        setAuthUserId(user.id);
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

  const handleLogout = () => {
    clearAuthUserId();
    logout();
  }

  return { error, handleLogin, handleRegister, handleLogout };
};


