import React from 'react';

interface RegisterViewProps {
  email: string;
  password: string;
  error: string | null;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RegisterView: React.FC<RegisterViewProps> = ({
  email,
  password,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}) => {
  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterView;