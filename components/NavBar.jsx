import Link from 'next/link'
import Image from 'next/image'
import { SignInButton } from './SignInButton'
import { SignOutButton } from './SignOutButton';

export const NavBar = () => {
    const userIsLoggedIn = true;
  return (
    <nav className='p-4 flex items-center justify-between mb-16'>
        <Link href='/' className='flex items-center gap-1'>
            <Image
                src='/assets/icon.png'
                width={37}
                height={37}
                className='object-contain'
            />
            <h2 className='font-bold text-xl'>Promptnetwork.</h2>
        </Link>

        {userIsLoggedIn ? (
            <div className='sm:flex hidden gap-2 items-center'>
                <Link href='/create-prompt'>
                    <button type="button" className='bg-gradient-to-r hover:scale-x-95 transition-all duration-150 from-blue-500 to-violet-800 shadow-md border-violet-800 border-2 rounded-full font-semibold text-lg py-2 px-4'>Create Prompt</button>
                </Link>
                <SignOutButton/>
            </div>
        ):(
            <SignInButton/>
        )}
    </nav>
  )
}
