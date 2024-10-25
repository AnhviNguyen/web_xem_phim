
import './style.scss';
import LoginForm from './form/login'; 
import RegisterForm from './form/register'; 
import React, { useState, useEffect } from 'react';
import { getUserInfo } from '../../auth/getUserInfo';

const Login = ({ initialForm }) => {

    const [isLogin, setIsLogin] = useState(initialForm === "login");
    const [isLoginByGoogle, setIsLoginByGoogle] = useState(false);

    const toggleForm = () => {
        setIsLogin(!isLogin);
        navigate(isLogin ? "/register" : "/login");
    };

    useEffect(() => {
        setIsLogin(initialForm === "login");
    }, [initialForm]);

    useEffect(() => {
        const initLogin = async () => {
          const name = await getUserInfo();
          setIsLoginByGoogle(!!name);
        };
        initLogin();
      }, []);


    return (
       <div className='text-white h-[100vh] flex justify-center items-center bg-cover opacity-50' style={{"background": "url('../../../public/background.jpg')"}}>
            {isLogin ? <LoginForm isLogin={isLoginByGoogle} setIsLogin={setIsLoginByGoogle} /> : <RegisterForm />}
       </div>
    );
};

export default Login;
