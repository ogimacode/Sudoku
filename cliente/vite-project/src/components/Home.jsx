import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styleAplication.css';

const Home = () => {
    const navigate = useNavigate();

    const goToLogin = () =>{
        navigate('/login')
    }
    const goToSignup = () =>{
        navigate('/signup')
    }
    return (
        <div className="home">
            <div className="forms-container">
                <div className="login-form-container">
                    <h2>Acesse o Sudoku:</h2>
                    <button onClick={goToLogin}>Login</button>
                </div>
                <div className="signup-form-container">
                    <h2>Registre-se:</h2>
                    <button onClick={goToSignup}>Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Home;