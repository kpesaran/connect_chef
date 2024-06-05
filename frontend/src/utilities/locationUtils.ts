import axios from 'axios';
import { LocationClass } from '../LocationClass';



const fetchLocationData = (): Promise<LocationClass> => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported by your browser"))
            return
        }
        navigator.geolocation.getCurrentPosition(async position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const endpoint = "http://localhost:3001/api/v1/reverse-geocode"

            try {
                const response = await axios.post<LocationClass>(endpoint, { latitude, longitude })
                resolve(response.data)
            }
            catch (error) {
                reject(new Error("Failed to fetch location data"))

            }
        })
    }
    )   
}

export default fetchLocationData
