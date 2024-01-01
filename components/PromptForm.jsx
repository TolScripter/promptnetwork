"use client";
import React, { useState } from 'react'

const promptFetcher = async (formData, method) =>{
  
}

export const PromptForm = ({ title, id }) => {
  const [formData, setFormData] = useState({
      prompt: '',
      tags: ''
    });
  
  const handleChange = (e) =>{
    const {name, target} = e.target;

    setFormData({
      ...formData,
      [name]: target
    })
  }

  const handleSubmit = async (e) =>{
      e.preventDefault();
  
  }
  return (
    <div className='p-4'>
      <h2 className='text-7xl  mb-4 font-bold bg-gradient-to-r from-blue-500 to-violet-800 bg-clip-text text-transparent'>{title} Prompt</h2>
      <form method='POST' className='mx-auto sm:ml-8 max-w-lg p-8' onSubmit={handleSubmit}>
        <div className='mb-1'>
          <label htmlFor="prompt" className='text-xl mb-2 font-bold'>Prompt</label>
          <textarea id='prompt' onChange={handleChange} className='w-full bg-gray-200 p-2 h-28 text-gray-800 font-bold border-gray-200 shadow-md' placeholder='Saisissez un promt...'></textarea>
        </div>
        <div className='mb-3'>
          <label htmlFor="tags" className='text-xl mb-2 font-bold'>Tags</label>
          <input type="text" name="tags" onChange={handleChange} id='tags' className='w-full bg-gray-200 p-2 text-gray-800 font-bold border-gray-200 shadow-md' placeholder='#ia #prompt'/>
        </div>
        <input type="submit" value={title} className='w-full bg-green-700 p-2 text-gray-800 font-bold border-green-700 text-lg shadow-lg'/>
      </form>
    </div>
  )
}
