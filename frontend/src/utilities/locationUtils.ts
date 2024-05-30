import axios from 'axios';

import type {Location} from '../interfaces'

const fetchLocationData = (): Promise<Location> => {
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
                const response = await axios.post<Location>(endpoint, { latitude, longitude })
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


 
// const getLocation = () => {
//     if (!navigator.geolocation) {
//         alert("Geolocation is not supported by your browser")
//         return
//     }
//     navigator.geolocation.getCurrentPosition(success, error);
  


// }
// const success = async (position) => {
//     const latitude = position.coords.latitude
//     const longitude = position.coords.longitude
//     const coordData = {
//         latitude, 
//         longitude
//     }
//     const endpoint = 'http://localhost:3001/api/v1/reverse-geocode'
//     const response = await axios.post(endpoint, coordData )
//     console.log(response)
//     setData(response.data)
// }
// const error = () => {
//     alert("unable to retrieve location")
// }