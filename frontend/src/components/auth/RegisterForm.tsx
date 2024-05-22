import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './styles-auth.css';

export default function RegisterForm(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  async function handleRegisterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const endpoint = 'http://localhost:3001/api/v1/auth/register';
      const response = await axios.post(endpoint, {
        name: name,
        email: email,
        password: password,
      });
      console.log('Registration success', response.data);

      const user = response.data.user;
      const token = response.data.token;
      localStorage.setItem('userName', user.name);
      localStorage.setItem('userId', user.userId);
      localStorage.setItem('token', token);
      navigate('/');
    } catch (err) {
      console.error('Registration Failed', err);
    }
  }

  return (
    <form className='flex flex-col ' onSubmit={handleRegisterSubmit}>
      <div className='flex flex-col '>
        <div className='input-container'>
          <label className='label-title'>Name</label>
          <input
            type='text'
            className=' input-box-auth'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className='input-container'>
          <label className='label-title'>Email</label>
          <input
            className='input-box-auth'
            type='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='input-container'>
          <label className='label-title '>Password</label>
          <input
            className='input-box-auth'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className='button-auth' type='submit'>
          Register
        </button>
      </div>
    </form>
  );
}
