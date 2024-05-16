import { useState } from 'react';
import axios from 'axios';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegisterSubmit(e) {
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
      localStorage.setItem('token', token);
    } catch (err) {
      console.error('Registration Failed', err);
    }
  }

  return (
    <form onSubmit={handleRegisterSubmit}>
      <div>
        <label>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <label>Email</label>
      <input
        type='email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div>
        <label>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <button type='submit'>Register</button>
      </div>
      <div></div>
    </form>
  );
}
