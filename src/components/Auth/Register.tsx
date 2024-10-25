import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; // Importa el nuevo hook
import RegisterView from './RegisterView';
const Register = () => {
  const { error, handleRegister } = useAuth(); // Obtén error y la función handleRegister
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <RegisterView
      email={email}
      password={password}
      username={username}
      error={error}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onUserChange={(e) => setUsername(e.target.value)}
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(email, password, username); // Llama a handleRegister
      }}
    />
  );
};

export default Register;