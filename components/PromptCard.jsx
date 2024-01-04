"use client";


import { useSession } from 'next-auth/react';
import React from 'react'
import { FaPencil } from 'react-icons/fa6';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export const PromptCard = ({prompt, tag, id, userId, ppublic}) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <div className={`max-w-sm text-start mx-auto relative cursor-pointer p-2 border-2 rounded-sm shadow-xl  text-gray-700 ${ppublic === false && pathname == '/profile' ? 'bg-red-400': 'bg-gray-400'}`}>
      <p className='font-[450px] italic mb-8'>{prompt}</p>
      <div className='flex items-center absolute w-full bottom-1 justify-between'>
        <p className='font-bold text-lg'>{tag}</p>
        {userId === session?.user?.id ? <Link href={`/edit-prompt/${id}`}>
          <FaPencil className='mr-6 '/>
        </Link> : 
          <div className='h-2 w-2 rounded-full shadow-xl mr-6 bg-green-700'></div>
          }                
      </div>
    </div>
  )
}
