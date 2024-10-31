
import './style.scss';
import LoginForm from './form/login'; 
import RegisterForm from './form/register'; 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../../auth/getUserInfo';

const Login = ({ initialForm }) => {
    const [isLogin, setIsLogin] = useState(initialForm === "login");

    useEffect(() => {
        setIsLogin(initialForm === "login");
    }, [initialForm]);

  

    return (
       <div className='text-white h-[100vh] flex justify-center items-center bg-cover opacity-50' style={{"background": "url('../../../public/background.jpg')"}}>
            {isLogin ? <LoginForm  /> : <RegisterForm  />}
       </div>
    );
};

export default Login;
