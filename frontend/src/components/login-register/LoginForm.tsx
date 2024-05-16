import { useState } from "react";
import axios from 'axios'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const endpoint = 'addEndPoint'
            const response = await axios.post(endpoint, { email: email, password: password })
            console.log("Login successful", response.data)
            // later add JWT Token from response here and set it to localStorage
        }
        catch (error) {
            console.error("Login failed", error)
        }
    }
  
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type='password'
                    value = {password}
                    onChange={(e)=>(e.target.value)}
                    />
                  
                </div>
                <div>
                    <button type ="submit">Login</button>
                </div>
            </form>
        </>
    )
}