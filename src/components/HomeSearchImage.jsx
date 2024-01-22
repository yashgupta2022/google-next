'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import Image from 'next/image'
export default function HomeSearchImage() {
    const [input, setInput] = useState('')
    const [randomSearchLoading, setRandomSearchLoading] = useState(false)
    const router = useRouter()
    function handleSubmit(e){
        e.preventDefault()
        if(!input.trim() ) return
        else router.push(`/search/image?searchTerm=${input}`)
    }

    async function randomSearch(){
        setRandomSearchLoading(true)
        const response = await fetch("https://random-word-api.herokuapp.com/word").then((res)=>res.json()).then((data)=>data[0])
        if (!response) return 

        router.push(`/search/image?searchTerm=${response}`)
        setRandomSearchLoading(false)
    }
  return ( <>
      <form onSubmit={handleSubmit} className='flex w-[90%] mt-5 mx-auto border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
        <AiOutlineSearch className='text-2xl text-gray-500 mr-3' />
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} className='flex-grow focus:outline-none' />
        <BsFillMicFill className='text-2xl text-gray-500 ml-3' />
      </form>
      <div className='flex flex-col  sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center mt-8'>
        <button onClick={handleSubmit} className='btn' >Google Image Search</button>
        <button disabled={randomSearchLoading}  onClick={randomSearch} className='btn flex items-center justify-center'>
            {randomSearchLoading?(<Image src='Spinner-1s-96px.svg' height={40} width={40} style={{filter:'grayscale(100%)'}} alt='loading...' className='text-center'/>) :("I'm Feeling Lucky") }</button>
      </div>
      </>
  )
}
