
import { Link, useNavigate } from 'react-router-dom';
import {BiUser} from "react-icons/bi";
import React, { useState } from 'react'; 
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from 'axios';

const register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleRegistration = async (event) => {
        event.preventDefault(); // Prevent form submission
        console.log('Starting registration...'); // Log kiểm tra
        try {
            const userData = {
                firstname,
                lastname,
                email,
                password
            };
            console.log('User data:', userData); // Log kiểm tra
            const response = await axios.post(
                `${import.meta.env.VITE_APP_API_URL}/v1/oauth/add`,
                userData,
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log('User registered:', response.data);

            setRegistrationSuccess(true);
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    const handleLoginClick = () => {
        navigate('/login'); // Điều hướng đến trang đăng ký
    };


    return (
        <div >
            <div className=' bg-slate-800 border border-slate-400 rounded-md p-16 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30'>
                <h1 className='text-3xl text-white font-bold text-center mb-6'>Register</h1>
                <form onSubmit={handleRegistration}> 
                    <div className='relative my-8 '>
                        <input  value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" className='w-full block w-72 py-2.3 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:text-white focus:border-white-600 peer' placeholder=''/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>First Name</label>
                        <BiUser className='absolute top-0 right-4' />
                    </div>
                    <div className='relative my-8 '>
                        <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" className='w-full block w-72 py-2.3 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:text-white focus:border-white-600 peer' placeholder=''/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Last Name</label>
                        <BiUser className='absolute top-0 right-4' />
                    </div>
                    <div className='relative my-8 l'>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='block w-72 py-2.3 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:text-white focus:border-white-600 peer' placeholder=''/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Email</label>
                        <BiUser className='absolute top-0 right-4' />
                    </div>
                    <div className='relative my-8  '>
                        <input autoComplete="current-password"  value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"}  className=' w-full block w-72 py-2.3 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:text-white focus:border-white-600 peer' placeholder=''/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Password</label>
                        <span 
                            className='absolute top-0 right-4 cursor-pointer'
                            onClick={togglePasswordVisibility}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </div>
                    <button  type='submit' className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-black hover:bg-orange-500 hover:text-white py-4 transition-colors duration-300 font-bold' type='submit'>Register</button>
                    <button type="button" onClick={handleLoginClick} className='flex justify-center ali'>
                        Already have an account? <span className='ml-5 text-orange-400'>Login</span>
                    </button>
                </form>
            </div> 
        </div>
    );
};

export default register;