import { useState } from 'react';
import './App.css';
import ZipCodeForm from './components/ZipCodeForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-4xl font-bold font-sans p-8'>App</h1>
      {/* Later fetch data from the api to display the number of zipcodes stored */}
      {/* <div className='card text-4xl'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <div className='card text-4xl border '>
        <ZipCodeForm />
      </div>
     
      
    </>
  );
}

export default App;
