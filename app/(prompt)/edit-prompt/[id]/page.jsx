
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { PromptForm } from '@/components/PromptForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

const EditPrompt = async ({params}) => {
    const session = await getServerSession(authOptions)
    if (!session) {
        return redirect('/api/auth/signin/google')
    }

    const {id} = params;
  return (
    <div>
        <PromptForm id={id}
            title='Update'
            method='PUT'
        />
    </div>
  )
}

export default EditPrompt