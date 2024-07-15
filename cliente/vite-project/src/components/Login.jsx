import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styleAplication.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const exit = () => {
        navigate('/');
    }
    
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('auth-token', data.token);
                console.log('Logged in successfully');
                navigate('/game');
            } else {
                alert(data.error || 'Failed to login');
            }
        } catch (err) {
            console.error(err);
            console.log('An error occurred');
        }
    };

    return (
        <form onSubmit={handleLogin} className="login-form">
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
            <button type="submit">Login</button>
            <button id='exit' onClick={exit}>Exit</button>
        </form>
    );
};

export default Login;




