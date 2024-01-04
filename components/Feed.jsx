import { PromptCard } from './PromptCard'



export const Feed = async ({prompts}) => {
    
    // const {prompts} = await getPrompts();
  return (
    <div className='my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 '>
        {
            prompts.map((prompt)=> <PromptCard key={prompt.id} prompt={prompt.prompt} 
                tag={prompt.tag} id={prompt._id} 
                ppublic={prompt.ppublic} userId={prompt.userId}
            />)        
        }
    </div>
  )
}
