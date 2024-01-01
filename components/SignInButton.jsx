"use client";
import React from 'react'
import { SignIn } from 'next-auth/react'


export const SignInButton = () => {
  return (
    <button type="button" className='bg-gradient-to-r from-blue-500 to-violet-800 shadow-md border-violet-800 border-2 rounded-full font-semibold text-lg py-2 px-4'>Sign In</button>
  )
}
