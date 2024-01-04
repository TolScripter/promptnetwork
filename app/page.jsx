import { Feed } from '@/components/Feed'
import { SearchBar } from '@/components/SearchBar';
import Image from 'next/image'

export const getPrompts = async ()=>{
    const res = await fetch('http://localhost:3000/api/prompts',{
        next:{
            revalidate: 3600
        }
    });
    return res.json();
}

export default async function Home() {
    const {prompts} = await getPrompts();
  return (
    <section className='p-4 text-center'>
        <div>
            <h2 className='md:text-7xl text-5xl mb-4 font-bold bg-gradient-to-r from-blue-500 to-violet-800 bg-clip-text text-transparent'>Create & Share your AI prompts</h2>
            <p className='text-gray-500 italic'>Publiez et partagez vos prompts IA. Lisez d'autres utilisateurs pour trouver de l'inspiration... Bienvenue sur Promptnetwork, l'outil en ligne qui vous permet d'avoir de meilleurs prompts pour vos créations basées sur l'IA.</p>
        </div>


        <SearchBar/>

        
        <Feed prompts={prompts.filter((p) => p.ppublic)}/>
        
    </section>
  )
}
