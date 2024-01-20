import React from 'react'
import CountryLookup from './CountryLookup'


export default function Footer() {
  return (
    <footer className='absolute mt-50 bottom-0 text-xs md:text-sm text-gray-500 w-full bg-[#f2f2f2]'>
        <div className=' '>
        <div className='border-b px-8 py-3'>
            <CountryLookup/>
        </div>
        <div className=' flex flex-col w-full sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0'>
            <ul className='flex items-center space-x-6'>
                <li className='link'>About</li>
                <li className='link'>Advertising</li>
                <li className='link'>Business</li>
                <li className='link'>How Search works</li>
            </ul>
            <ul className='flex items-center space-x-6'>
                <li className='link'>Privacy</li>
                <li className='link'>Terms</li>
                <li className='link'>Settings</li>
            </ul>
        </div>
        </div>
    </footer>
  )
}
