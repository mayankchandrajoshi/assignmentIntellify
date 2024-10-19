import LoginFrom from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'
import React from 'react'

export default function Login() {
    return (
        <div className='w-screen h-screen flex justify-center items-center font-[family-name:var(--font-geist-sans)] bg-background p-5'>
            <div className='w-full max-w-2xl flex flex-col justify-center items-center gap-10'>
                <h1 className='text-3xl text-center font-bold'>
                    Welcome Back
                </h1>
                <LoginFrom/>
            </div>
        </div>
    )
}
