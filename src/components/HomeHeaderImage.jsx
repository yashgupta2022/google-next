import Link from 'next/link'
import React from 'react'
import {TbGridDots} from 'react-icons/tb'

export default function HomeHeaderImage() {
  return (
    <header className='flex justify-end  p-5'>
      <div className='flex gap-4 items-center'>
        <Link href='https://mail.google.com' className='hover:underline'>Gmail</Link>
        <Link href='/' className='hover:underline'>Web</Link>
        <TbGridDots className='bg-transparent cursor-pointer hover:bg-gray-200 rounded-full text-4xl' />
        <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>Sign in</button>
      </div>
    </header>
  )
}
