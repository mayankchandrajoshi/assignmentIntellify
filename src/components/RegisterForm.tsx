"use client"

import { register } from '@/lib/auth';
import { TextField } from '@mui/material'
import Image from 'next/image';
import React, { useState,useEffect, useRef } from 'react'
import { FaPlus, FaUserAlt } from "react-icons/fa";
import { IoPersonCircle } from 'react-icons/io5';

export default function RegisterForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const handleRegister = async(e: React.FormEvent) => {
        e.preventDefault();

        if(!email || !password || !confirmPassword) {
            alert('Please enter your email, password, and confirm password');
            return;
        }

        try {
            await register(email, password);
            alert('Sign-in successful!');
        } catch (err: any) {
            alert(err.message);
        }
    
    }

  return (
    <form onSubmit={handleRegister} className='w-full max-w-80 flex flex-col gap-5'>
        <TextField id="email" label="Email" variant="outlined" type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} sx={{
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: 'white',
            },
            '&:hover fieldset': {
            borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
            borderColor: 'white',
            }
        },
        '& .MuiInputLabel-root': {
            color: 'white',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
        },
        '& .MuiOutlinedInput-input': {
            color: 'white',
        },
        '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px black inset', // Change background color
            WebkitTextFillColor: 'white',           // Change text color
        },
        '& input:-webkit-autofill:focus': {
            WebkitBoxShadow: '0 0 0 100px black inset',
            WebkitTextFillColor: 'white',
        },
        '& input:-webkit-autofill:hover': {
            WebkitBoxShadow: '0 0 0 100px black inset',
            WebkitTextFillColor: 'white',
        },
        }}/>
        <TextField id="password" label="Password" variant="outlined" type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}
        sx={{
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: 'white',
            },
            '&:hover fieldset': {
            borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
            borderColor: 'white',
            }
        },
        '& .MuiInputLabel-root': {
            color: 'white',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
        },
        '& .MuiOutlinedInput-input': {
            color: 'white',
        },
        }}/>
        <TextField id="confirm-password" label="Confirm Password" variant="outlined" type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
        sx={{
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: 'white',
            },
            '&:hover fieldset': {
            borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
            borderColor: 'white',
            }
        },
        '& .MuiInputLabel-root': {
            color: 'white',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
        },
        '& .MuiOutlinedInput-input': {
            color: 'white',
        },
        }}/>
        <input type='submit' value="Register" className="w-full flex flex-row items-center justify-center gap-2 p-2 px-5 rounded-md bg-slate-200 hover:bg-slate-300 duration-500 mt-5 text-black font-semibold cursor-pointer" />
    </form>
  )
}
