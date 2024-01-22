import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbGridDots } from 'react-icons/tb'
import SearchBox from './SearchBox'
import { RiSettings3Line } from 'react-icons/ri'

export default function SearchHeader() {
  return (
    <header className='flex flex-col sm:flex-row justify-between w-full p-5 items-center'>
        <div className='absolute w-120 mb-3 sm:mb-0'>
            <Link href='/'>
            <Image  src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'  alt=" " width={120} height={40} />
            </Link>
        </div>
        <div className='flex flex-grow mt-12 sm:ml-[120px] sm:mt-0 '>
            <SearchBox />
        </div>
      <div className=' gap-4 items-center hidden md:inline-flex'>
      
        <Link href='https://mail.google.com' className='hover:underline'>Gmail</Link>
        <Link href='/images' className='hover:underline'>Images</Link>
        <TbGridDots className='bg-transparent cursor-pointer hover:bg-gray-200 rounded-full text-4xl' />
        <RiSettings3Line className='bg-transparent cursor-pointer hover:bg-gray-200 rounded-full text-4xl'/>
        <button className='bg-blue-500 text-white px-6 py-2 w-[80%] font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>Sign in</button>
      </div>
    </header>
  )
}
