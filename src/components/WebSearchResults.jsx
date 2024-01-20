import Link from 'next/link'
import React from 'react'
import Parser from 'html-react-parser'
import PaginationButtons from './PaginationButtons';

export default async function WebSearchResults({result}) {
    await new Promise(r => setTimeout(r, 2000));
  return (
    <div className='w-full mx-auto px-3 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
        <p className='text-gray-600 text-sm mb-5 mt-3'>
        About {result.searchInformation.formattedTotalResults} results ({result.searchInformation.formattedSearchTime} seconds)
        </p>
        {result.items?.map((resultitem)=>(
            <div className="m-8 ml-0 max-w-xl" key={resultitem.link}>
                <div className='group flex flex-col'>
                    <Link className='text-sm truncate' href={resultitem.link} >
                        {resultitem.formattedUrl}
                    </Link>
                    <Link className='group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800' href={resultitem.link}>
                        {resultitem.title}
                    </Link>
                </div>
                <p className=''>
                    {Parser(resultitem.htmlSnippet)}
                </p>

            </div>
        ))}
        <PaginationButtons/>
    </div>
  )
}
