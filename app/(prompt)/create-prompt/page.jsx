import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { PromptForm } from "@/components/PromptForm"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import React from 'react'

const AddPrompt = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    return redirect('/api/auth/signin/google')
  }
  return (
    <div>
        <PromptForm 
            title='Create'
            method='POST'
        />
    </div>
  )
}

export default AddPrompt
