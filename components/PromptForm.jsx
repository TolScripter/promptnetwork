"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { DeleteButton } from './DeleteButton';

const promptFetcher = async (formData, method, id) =>{
  try {
    const api_url = id ? 
      `http://localhost:3000/api/prompts/${id}` : 'http://localhost:3000/api/prompts'

    const res = await fetch(api_url,{
      headers:{
        'Content-Type': 'application/json'
      },
      method, body: JSON.stringify(formData)
    });

    if (!res) {
      throw new Error('Failed to fetch prompt data');
    }
    return res;
  } catch (error) {
    console.log(error)
  }

}

export const PromptForm = ({ title, id, method }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
      prompt: '',
      tag: '',
      ppublic: '',
      userId: session?.user?.id
    });
  
  const handleChange = (e) =>{
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    formData.ppublic = !formData.ppublic ? false:true
    // console.log(formData)

    const res = await promptFetcher(formData, method, id)
    if (res) {
      alert('operation completed successfully');
      router.refresh();
      router.push('/');
    }
  }
  return (
    <div className='p-4 flex items-start justify-between'>
      <div>

        <h2 className='md:text-7xl text-5xl  mb-4 font-bold bg-gradient-to-r from-blue-500 to-violet-800 bg-clip-text text-transparent'>{title} Prompt</h2>
        <p className='text-gray-200 italic'>Publier ou modifier un prompt en utilisant ce formulaire... Le champ TAG permettra de mieux référencer votre publication !</p>
        <form method='POST' className='mx-auto sm:ml-8 max-w-lg p-8' onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="prompt" className='text-xl mb-2 font-bold'>Prompt</label>
            <textarea id='prompt' name="prompt" onChange={handleChange} className='w-full bg-gray-200 p-2 h-28 text-gray-800 font-bold border-gray-200 shadow-md' placeholder='Saisissez un promt...'></textarea>
          </div>
          <div className='mb-4'>
            <label htmlFor="tag" className='text-xl mb-2 font-bold'>Tag</label>
            <input type="text" name="tag" onChange={handleChange} id='tag' className='w-full bg-gray-200 p-2 text-gray-800 font-bold border-gray-200 shadow-md' placeholder='#prompt'/>
          </div>
          <label className="relative inline-flex items-center cursor-pointer mb-3">
            <input type="checkbox"  name='ppublic' onChange={handleChange} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-200 ">Public</span>
          </label>
          <input type="submit" value={title} className='w-full bg-green-700 p-2 text-gray-800 font-bold border-green-700 text-lg shadow-lg'/>
        </form>
      </div>
      {id ? <DeleteButton id={id}/>: ''}
    </div>
  )
}
