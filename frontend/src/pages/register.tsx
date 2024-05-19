import RegisterForm from '../components/auth/RegisterForm';
import './styles.css';

export default function Register() {
  return (
    <div className='background-auth'>
        <div className='auth-box flex justify-center flex-col'>
          <h2>Register</h2>
          <div>
            <RegisterForm />
          </div>
        </div>
    </div>
  );
}
