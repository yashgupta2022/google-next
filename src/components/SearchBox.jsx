'use client'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill} from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export default function SearchBox() {
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get('searchTerm')
    const [input, setInput] = useState(searchTerm || '')
    const router = useRouter()
    function handleSubmit(e){
        e.preventDefault()
        if(!input.trim() ) return
        else router.push(`/search/web?searchTerm=${input}`)
    
    }
  return (
    < >
      <form onSubmit={handleSubmit} className='flex items-center justify-center w-[100%] mx-5 border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-3xl'>
       
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} className='flex-grow  focus:outline-none' />
        <RxCross2 onClick={()=>setInput('')} className=' text-2xl text-gray-500 mx-2 cursor-pointer pr-0'  />
        <div className='flex flex-row hidden md:inline-flex'>
        <BsFillMicFill className='text-3xl  border-l  border-gray-300 pl-2 text-blue-500 ml-0 mr-3 cursor-pointer' />
        <AiOutlineSearch onClick={handleSubmit} className='text-2xl text-blue-500 mr-3 cursor-pointer' />
        </div>
        
      </form>
    </>
  )
}
