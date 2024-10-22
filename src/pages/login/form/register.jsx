
import { Link } from 'react-router-dom';
import {BiUser} from "react-icons/bi";
import React, { useState } from 'react'; 
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div>
            <div className='bg-slate-800 border border-slate-400 rounded-md p-16 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30'>
                <h1 className='text-4xl text-white font-bold text-center mb-6'>Register</h1>
                <form action=""> 
                    <div className='relative my-8'>
                        <input type="text" className='block w-72 py-2.3 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:text-white focus:border-white-600 peer' placeholder=''/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Username</label>
                        <BiUser className='absolute top-0 right-4' />
                    </div>
                    <div className='relative my-8'>
                        <input type="email" className='block w-72 py-2.3 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:text-white focus:border-white-600 peer' placeholder=''/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Email</label>
                        <BiUser className='absolute top-0 right-4' />
                    </div>
                    <div className='relative my-8'>
                        <input type={showPassword ? "text" : "password"}  className='block w-72 py-2.3 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:text-white focus:border-white-600 peer' placeholder=''/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Password</label>
                        <span 
                            className='absolute top-0 right-4 cursor-pointer'
                            onClick={togglePasswordVisibility}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </div>
                    <div className='relative my-8'>
                        <input type={showPassword ? "text" : "password"}  className='block w-72 py-2.3 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:text-white focus:border-white-600 peer' placeholder=''/>
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Confirm Your Password</label>
                        <span 
                            className='absolute top-0 right-4 cursor-pointer'
                            onClick={togglePasswordVisibility}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </div>
                    <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-black hover:bg-orange-500 hover:text-white py-4 transition-colors duration-300 font-bold' type='submit'>Register</button>
                    <div>
                        <span className='m-4'>Already have an account? <Link className='text-orange-400' to='/login'>Log in</Link></span>
                    </div>
                </form>
            </div> 
        </div>
    );
};

export default register;