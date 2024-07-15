import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styleAplication.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const exit = () => {
        navigate('/');
    }

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:8000/adduser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (res.ok) {
                console.log('User registered successfully');
                navigate('/login'); 
            } else {
                const data = await res.json();
                console.log(data.error || 'Failed to register');
            }
        } catch (err) {
            console.error(err);
            console.log('An error occurred');
        }
    };

    return (
        <form onSubmit={handleSignup} className="signup-form">
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" 
                required 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
            />
            <button type="submit">Sign Up</button>
            <button id='exit' onClick={exit}>Exit</button>
        </form>
    );
};

export default Signup;




