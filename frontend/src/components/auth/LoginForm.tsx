import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const endpoint = 'http://localhost:3001/api/v1/auth/login';
      const response = await axios.post(endpoint, {
        email: email,
        password: password,
      });
      console.log('Login successful', response.data);
      const user = response.data.user;
      const token = response.data.token;
      localStorage.setItem('userName', user.name);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.userId);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
        <div className='input-container'>
          <label className='label-title  '>Email:</label>
          <input
            type='email'
            className='input-box-auth'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='input-container'>
          <label className='label-title'>Password:</label>
          <input
            className='input-box-auth'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className='button-auth' type='submit'>
          Login
        </button>
      </form>
    </>
  );
}
