'use client'
import React from 'react'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'
import { usePathname ,useRouter, useSearchParams} from 'next/navigation'

export default function SearchHeaderOptions() {
    const pathname = usePathname();
    const router = useRouter()
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get('searchTerm')
    function selectTab(tab){
        router.push(`/search/${tab=== 'Images' ? 'image' : 'web'}?searchTerm=${searchTerm}`)
    }
  return (
    <div className='flex space-x-2 select-none border-b-2 w-full justify-center lg:justify-start lg:pl-40 text-gray-700 text-sm'>
      <div onClick={()=>selectTab('All')} className={`flex items-center space-x-1 cursor-pointer pb-3 px-5 border-b-4 border-transparent active:text-blue-500 ${pathname==="/search/web" && "!text-blue-600 !border-blue-600"}`}>
        <AiOutlineSearch className='text-2xl'/>
        <p>All</p>
      </div>
      <div onClick={()=>selectTab('Images')} className={`flex items-center space-x-1 cursor-pointer pb-3 px-5 border-b-4 border-transparent active:text-blue-500 ${pathname==="/search/image" && "!text-blue-600 !border-blue-600"}`}>
        <AiOutlineCamera className='text-2xl'/>
        <p>Images</p>
      </div>
    </div>
  )
}
