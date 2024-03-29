import ImageSearchResults from '@/components/ImageSearchResults'
import Link from 'next/link'
import React from 'react'

export default async function ImageSearchPage({searchParams}) {
  const startIndex = +searchParams.start || "1"
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`)

  if (!response.ok) {
    throw new Error(response.status + " " + response.statusText)
  }
  const data = await response.json()
  const results = data.items
  if (!results) {
    return <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">No results found...</h1>
      <p >Try search for something else or go back to   
        <Link className='text-blue-300' href='/'>   Home</Link>
      </p>
    </div>
  }
  else { return (
    <div>
      {results && <ImageSearchResults result= {data}/>}

    </div>
  )}
}


