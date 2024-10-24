import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; // Importa el nuevo hook
import LoginView from './LoginView';

const Login = () => {
  const { error, handleLogin } = useAuth(); // Obtén error y la función handleLogin
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginView
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      handleLogin={(e) => {
        e.preventDefault();
        handleLogin(email, password); // Llama a handleLogin
      }}
    />
  );
};

export default Login;