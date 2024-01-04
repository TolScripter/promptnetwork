import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { getPrompts } from '../page'
import { Feed } from '@/components/Feed'

const profile = async () => {
    const session = await getServerSession(authOptions)
    if (!session) {
      return redirect('/api/auth/signin/google')
    }
    const {prompts} = await getPrompts();
  return (
    <section className='p-4'>
      <div>
        <h2 className='text-7xl  mb-4 font-bold bg-gradient-to-r from-blue-500 to-violet-800 bg-clip-text text-transparent'>Profile</h2>
        <p className='text-gray-200 italic'>Retrouvez ici tous les prompts que vous avez créé et partager. Privé comme public...</p>
      </div>
      <Feed prompts={prompts}/>
    </section>
  )
}

export default profile