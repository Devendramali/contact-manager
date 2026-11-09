"use client"

import React, { useState } from 'react'
import { loginAction } from '../actions/auth'

export const LoginForm = () => {
        const [error, setError] = useState("");

    const handleLogin = async (formData: FormData) => {

        setError("");

        const result = await loginAction(formData);

        if (result?.success === false) {
            setError(result.message);
        }
    };
  return (
    <form action={handleLogin} className='space-x-4'>
        <div>
            <label className='block text-sm font-medium text-gray-700' htmlFor="email">Email</label>
            <input name='email' type='email' placeholder='enter your email'
            required className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'/>
        </div>
          <div className='mt-3'>
            <label className='block text-sm font-medium text-gray-700' htmlFor="password">password</label>
            <input name='password' type='password' placeholder='enter your password'
            required className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'/>
        </div>
          {/* Error Message */}
            {error && (
                <p className="mt-3 text-sm text-red-500">
                    {error}
                </p>
            )}
        <button type='submit' className='mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 cursor-pointer hover:bg-blue-600 '>Login</button>

    </form>
  )
}
