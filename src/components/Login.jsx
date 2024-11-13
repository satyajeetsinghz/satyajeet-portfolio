import React from 'react'
import { useNavigate } from 'react-router-dom';
import MainDisplay from './MainDisplay';

const Login = () => {

    const navigate = useNavigate();

    const LoginPage = () => {
        navigate('/login'); // Replace '/target-page' with your desired route
    };

    return (
        <div className='flex justify-center items-center h-screen text-2xl text-white bg-red-300'>
            Heu
        </div>
    )
}

export default Login
