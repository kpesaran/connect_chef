import LoginForm from '../components/auth/LoginForm';

import './styles.css';

export default function Login() {
  return (
    <div className='background-auth'>
      <h1 className='pt-48 font-bold'>CONNECT CHEF</h1>
      <div className='auth-box flex justify-center flex-col'>
        <h1>Login</h1>
        <div className='flex flex-col justify-center'>
          <LoginForm />
          <p className='font-bold'>Need to register? <a className='font-bold' href='http://localhost:5173/#/register'>Click Here</a></p>
        </div>
      </div>
    </div>
  );
}
