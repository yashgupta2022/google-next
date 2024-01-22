'use client'
import HomeHeaderImage from '@/components/HomeHeaderImage'
import HomeSearchImage from '@/components/HomeSearchImage'
import Image from 'next/image'
export default function page() {
  return (
    <>
      <HomeHeaderImage/>
      <div className='flex flex-col items-center mt-24 cursor-pointer ' >
        <Image  src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png' alt="" width={300} height={100} />
        <HomeSearchImage    />
      </div>
    </>
  )
}