import React, { useState } from 'react';
import axios from 'axios';

const ZipCodeForm: React.FC = () => {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

      //
      console.log('this hit')
    const endpoint = 'http://localhost:3001/api/v1/locations';
    try {
        const response = await axios.post(endpoint, {zipcode: zipCode});
        console.log(response.data)
    } catch (error) {
        console.error('error submitting zip code:', error);
        alert('Didnt work')
    }
  };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={zipCode}
                onChange={(event) => setZipCode(event.target.value)}
                placeholder="Enter Zip Code"
                
            className = "input-class border p-8 text-4xl"
            />
            <button type="submit" className="button-class text-4xl font-bold border p-8">
                Submit
            </button>
        </form>
    )
};

export default ZipCodeForm