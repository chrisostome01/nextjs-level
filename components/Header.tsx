import { useMutation } from '@apollo/client';
import { CreditCardIcon, LoginIcon, LogoutIcon, MoonIcon, SunIcon } from '@heroicons/react/solid'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Link from 'next/link';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { LOGIN } from '../pages/api/graphql';
import { topicParam } from '../utils/types/types';
import Topic from './Topic';


const  Header = ({topicName}:topicParam) => {
    const {systemTheme , theme, setTheme} = useTheme();
    const [ showLoginMode , setShowLoginMode  ] = useState(false);
    const [ showSignupMode , setShowSignupMode  ] = useState(false);
    const [signin] = useMutation(LOGIN);
    const changeTheme= () => {
  
        const currentTheme = theme === "system" ? systemTheme : theme ;
  
        if(currentTheme ==="dark"){
          return (
            <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
          )
        }  
        else {
          return (
            <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
          )
        }
    };
  
    const authenticate = async (e:any) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;  
      if (email.trim().length == 0 || password.trim().length == 0) {
        return toast('Email and password should not be empty', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });          
      }
      try {
        const userInfo = await signin({ variables: { email,password } });
        const token = userInfo.data?.login.token;
        localStorage.setItem("token",token)   
      } catch (error) {
        return toast('Invalid credentials', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });    
      }
      setShowLoginMode(false)
    }

    return (
        <header className="h-15 shadow-2xl dark:bg-black-800">
          <ToastContainer />
          {/* ================================================= Start: signin model ======================================================================================================== */}
          <div className={`overlay bg-slate-900 opacity-70  h-full w-full absolute right-0 left-0 top-0  ${ showLoginMode == true ? " flex" : " hidden"} items-center justify-center z-50`}>
            <div className="card w-4/12 min-h-2/6 min-2xl:h-60 bg-gray-200 dark:bg-gray-800 opacity-95 rounded-md shadow-xl text-center p-3 mx-4 flex flex-col items-center justify-center">
              <div className=" text-indigo-500 hover:text-indigo-500 font-bold text-lg 2xl:text-4xl">
                Signin
              </div>
              <div className="text-gray-500 font-medium min-w-full">
                <form className="w-full" onSubmit={(e) => {
                  authenticate(e)
                }} >
                  <div className="input m-3">
                    <input type="email" name="email" className='text-center shadow-lg w-full p-2 rounded-md bg-blue-100' placeholder='Email'/>
                  </div>
                  <div className="input m-3">
                    <input type="password" name="password" className='text-center shadow-lg w-full p-2 rounded-md bg-blue-100' placeholder='Password'/>
                  </div>
                  <button type="submit" className="hover:dark:bg-indigo-500 hover:bg-indigo-500 hover:text-white bg-white border-2 border-indigo-500 text-indigo-500 px-4 py-1 font-medium rounded shadow-lg cursor-pointer dark:bg-transparent mr-4" onClick={(e) =>{
                    e.preventDefault();
                    setShowLoginMode(false);
                  }}>Cancel</button>
                  <button type="submit" className="bg-indigo-500 hover:text-indigo-500 hover:bg-transparent hover:border-indigo-500 border-2 text-white px-4 py-1 font-medium rounded shadow-lg  my-3 cursor-pointer" onClick={(e) =>{
                   
                  }}>Signin</button>
                </form>                       
              </div> 
            </div>
          </div> 
          {/* ======================================================= End: signin model ======================================================================================================== */}
          
          {/* ================================================= Start: Register model ======================================================================================================== */}
          <div className={`overlay bg-slate-900 opacity-70  h-full w-full absolute right-0 left-0 top-0  ${ showSignupMode == true ? " flex" : " hidden"} items-center justify-center z-50`}>
            <div className="card w-4/12 min-h-2/6 min-2xl:h-60 bg-white opacity-100 dark:bg-gray-800 rounded-md shadow-xl text-center p-3 mx-4 flex flex-col items-center justify-center z-60">
              <div className=" text-indigo-500 hover:text-indigo-500 font-bold text-lg 2xl:text-4xl">
                Register your account
              </div>
              <div className="text-gray-500 font-medium min-w-full">
                <form className="w-full">
                  <div className="input m-3">
                    <input type="email" name="email" className='text-center shadow-lg w-full p-2 rounded-md bg-blue-100' placeholder='Email'/>
                  </div>
                  <div className="input m-3">
                    <input type="password" name="password" className='text-center shadow-lg w-full p-2 rounded-md bg-blue-100' placeholder='Password'/>
                  </div>

                  <button type="submit" className="hover:dark:bg-indigo-500 hover:bg-indigo-500 hover:text-white bg-white border-2 border-indigo-500 text-indigo-500 px-4 py-1 font-medium rounded shadow-lg cursor-pointer dark:bg-transparent mr-4" onClick={(e) =>{
                    e.preventDefault();
                    setShowSignupMode(false);
                  }}>Cancel</button>
                  <button type="submit" className="bg-indigo-500 hover:text-indigo-500 hover:bg-transparent hover:border-indigo-500 border-2 text-white px-4 py-1 font-medium rounded shadow-lg  my-3 cursor-pointer" onClick={(e) =>{
                    e.preventDefault();
                    setShowSignupMode(false);
                  }}>Register</button>
                </form>                       
              </div> 
            </div>
          </div> 
          {/* ======================================================= End: Register model ======================================================================================================== */}
          
          {/* ================================================= Start: Register model ======================================================================================================== */}
          <div className={`overlay bg-slate-900 opacity-70  h-full w-full absolute right-0 left-0 top-0  ${ showSignupMode == true ? " flex" : " hidden"} items-center justify-center z-50`}>
            <div className="card w-4/12 min-h-2/6 min-2xl:h-60 bg-white opacity-100 dark:bg-gray-800 rounded-md shadow-xl text-center p-3 mx-4 flex flex-col items-center justify-center z-60">
              <div className=" text-indigo-500 hover:text-indigo-500 font-bold text-lg 2xl:text-4xl">
                Create a card
              </div>
              <div className="text-gray-500 font-medium min-w-full">
                <form className="w-full">
                  <div className="input m-3">
                    <input type="email" name="email" className='text-center shadow-lg w-full p-2 rounded-md bg-blue-100' placeholder='Email'/>
                  </div>
                  <div className="input m-3">
                    <input type="password" name="password" className='text-center shadow-lg w-full p-2 rounded-md bg-blue-100' placeholder='Password'/>
                  </div>

                  <button type="submit" className="hover:dark:bg-indigo-500 hover:bg-indigo-500 hover:text-white bg-white border-2 border-indigo-500 text-indigo-500 px-4 py-1 font-medium rounded shadow-lg cursor-pointer dark:bg-transparent mr-4" onClick={(e) =>{
                    e.preventDefault();
                    setShowSignupMode(false);
                  }}>Cancel</button>
                  <button type="submit" className="bg-indigo-500 hover:text-indigo-500 hover:bg-transparent hover:border-indigo-500 border-2 text-white px-4 py-1 font-medium rounded shadow-lg  my-3 cursor-pointer" onClick={(e) =>{
                    e.preventDefault();
                    setShowSignupMode(false);
                  }}>Register</button>
                </form>                       
              </div> 
            </div>
          </div> 
          {/* ======================================================= End: Register model ======================================================================================================== */}

          <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">
            <Topic topicName={topicName} />
            <div className="buttons flex items-center justify-evenly w-2/6">
              { localStorage.getItem("token") ?
              
                <>
                  
                  <a className="text-indigo-500 cursor-pointer uppercase flex items-center hover:dark:text-white hover:text-indigo-700 ">
                    <CreditCardIcon  className="h-8 w-8 flex-shrink-0 mr-3"/>                        
                  </a>      
                  <a className="text-indigo-500 cursor-pointer uppercase flex items-center hover:dark:text-white hover:text-indigo-700  " onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}>
                    <LogoutIcon  className="h-8 w-8 flex-shrink-0 mr-3"/>                    
                  </a>                            
                </>
                :
                <>
                  <button type="submit" className="bg-indigo-500 hover:text-indigo-500 hover:bg-transparent hover:border-indigo-500 border-2 text-white px-4 py-1 font-medium rounded shadow-lg  my-3 cursor-pointer" onClick={() =>{
                    setShowLoginMode(true)
                  }}>
                    Signin
                  </button>
                  <button type="submit" className=" hover:dark:bg-indigo-500 hover:bg-indigo-500 hover:text-white bg-white border-2 border-indigo-500 text-indigo-500 px-4 py-1 font-medium rounded shadow-lg cursor-pointer dark:bg-transparent" onClick={() =>{
                    setShowSignupMode(true)
                  }} >Signup</button>                
                </>
              }
            </div>
            {changeTheme()}
          </div>
        </header>
    )
}

export default Header