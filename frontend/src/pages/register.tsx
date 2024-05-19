import RegisterForm from '../components/auth/RegisterForm';
import './styles.css';

export default function Register() {
  return (
      <div className='background-auth'>
          <h1 className='pt-48 font-bold'>CONNECT CHEF</h1>
        <div className='auth-box flex justify-center flex-col'>
          <h2 className='text-2xl'>Register</h2>
          <div>
                  <RegisterForm />
                  <p className='font-bold'>Already Have An Account?</p>
                  <a className='font-bold'href='http://localhost:5173/#/login'>Click Here To Login</a>
          </div>
        </div>
    </div>
  );
}
