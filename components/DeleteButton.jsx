"use client";

import { useRouter } from 'next/navigation';
import React from 'react'
import { FaTrash } from 'react-icons/fa6';

export const DeleteButton = ({id}) => {
    const router = useRouter();
    const deletePrompt = async (id) =>{

        try {
            const res = await fetch(`http://localhost:3000/api/prompts/${id}`,{
                method: 'DELETE'
            })
            if (!res.ok) {  
                throw new Error('Failed to delete prompt')                  
            }
            alert('Prompt deleted successfully!');
            router.push('/')
        } catch (error) {
            console.log(error);
        }   
        
    }
  return (
    <button type="button" onClick={()=> {
        deletePrompt(id)}} className='flex items-center gap-2 bg-red-600 text-gray-200 rounded-md px-4 py-2 font-semibold text-lg'>
        <FaTrash/>Delete
    </button>
  )
}
