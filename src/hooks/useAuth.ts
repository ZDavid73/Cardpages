import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/AuthService';
import { clearAuthUserId, getAuthUserId, setAuthUserId } from '../utils/storage';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/auth/userSlice';
import { getUserInfo } from '../services/databaseService';


export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (email: string, password: string) => {
    try {
      const user = await loginUser(email, password);
      if (user) {
        navigate('/dashboard'); 

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

  const handleRegister = async (email: string, password: string, username: string) => {
    try {
      const user = await registerUser(email, password, username, '');
      if (user) {
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
    console.log('logout');
    clearAuthUserId();
    console.log(getAuthUserId())
    dispatch(logout());
  }

  return { error, handleLogin, handleRegister, handleLogout };
};