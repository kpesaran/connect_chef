import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function handleSubmit(e) {
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
        navigate('/')
      
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </>
  );
}
