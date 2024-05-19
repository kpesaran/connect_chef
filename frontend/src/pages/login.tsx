import LoginForm from '../components/auth/LoginForm';

import './styles.css'

export default function Login() {
  return (
    <div className='background-auth'>
        <div className='auth-box flex justify-center flex-col'>
        <h1>Login</h1>
        <div className='flex flex-col justify-center'>
          <LoginForm />
        </div>
          </div>
    </div>
  );
}
