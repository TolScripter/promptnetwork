"use client";
import Link from 'next/link'
import Image from 'next/image'
import { SignInButton } from './SignInButton'
import { SignOutButton } from './SignOutButton';
import { useSession } from 'next-auth/react';
import { SpinnerLoader } from './SpinnerLoader';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { useState } from 'react';

export const NavBar = () => {
    
    const { status, data: session } = useSession();
    const [activeToggle, setActiveToggle] = useState(false);
  return status === "loading" ? <SpinnerLoader /> : (
    <nav className='p-4 mb-16 relative'>
        <div className='flex items-center justify-between'>
            <Link href='/' className='flex items-center gap-1'>
                <Image
                    src='/assets/icon.png'
                    width={37}
                    height={37}
                    className='object-contain'
                />
                <h2 className='font-bold text-xl'>Promptnetwork.</h2>
            </Link>
            { status === 'authenticated' ? (
                <>
                    <div className='sm:flex hidden gap-2 items-center'>
                        <Link href='/create-prompt'>
                            <button type="button" className='bg-gradient-to-r hover:scale-x-95 transition-all duration-150 from-blue-500 to-violet-800 shadow-md border-violet-800 border-2 rounded-full font-semibold text-lg py-2 px-4'>Create Prompt</button>
                        </Link>
                        <SignOutButton/>
                        <Link href='/profile'>
                            <Image
                                src={session.user.image}
                                alt='profile img'
                                width={45}
                                height={45}
                                className='object-contain rounded-full cursor-pointer shadow-md'
                            />
                        </Link>
                    </div>
                    <div className='sm:hidden text-2xl text-gray-200'>
                        {activeToggle === true ? <FaXmark onClick={()=> setActiveToggle(!activeToggle)}/> : <FaBars onClick={()=> setActiveToggle(!activeToggle)}/>}                    
                    </div>
                </>
            ):(
                <SignInButton/>
            )}
            
        </div>
        {activeToggle === true ?
            <ul className='w-full z-50 space-y-2 p-2 font-bold bg-gradient-to-r from-slate-900 to-zinc-900 h-screen absolute'>
                <li onClick={()=> setActiveToggle(true)} className=' hover:text-violet-800 '><Link href='/create-prompt'>Create Prompt</Link></li>
                <li onClick={()=> setActiveToggle(true)} className=' hover:text-violet-800 '><Link href='/profile'>Profile</Link></li>
                <li><SignOutButton/></li>
            </ul> : ""}
    </nav>
  )
}
