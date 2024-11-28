import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/AuthService';
import { clearAuthUserId, getAuthUserId, setAuthUserId } from '../utils/storage';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/auth/userSlice';
import { setCart } from '../features/cartSlice';
import { getUserInfo } from '../services/databaseService';
import { User } from '../types/userTypes';


export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const tempUser = useRef<User | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGetUserInfo = useCallback(async (userId: string): Promise<User | null> => {
    const user = await getUserInfo(userId);
    if (user) {
      tempUser.current = user; // Store in useRef instead of state
    }
    return user || null; // Allow the caller to use the fetched user data
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      const user = await loginUser(email, password);
      if (user) {
        navigate('/dashboard'); 

        const actualUser = await getUserInfo(user.id);
         if (actualUser) {
          dispatch(login(actualUser));
          dispatch(setCart(actualUser.cart));
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

  return { error, handleLogin, handleRegister, handleLogout, tempUser: tempUser.current, handleGetUserInfo };
};