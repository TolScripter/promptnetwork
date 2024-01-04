"use client";
import {signOut} from 'next-auth/react'

export const SignOutButton = () => {
  return (
    <button onClick={()=> signOut()} type="button" className='border-2 border-violet-800 px-4 py-2 rounded-full font-medium hover:bg-violet-800 transition-all duration-150 shadow-md hover:scale-x-105'>SignOut</button>
  )
}
