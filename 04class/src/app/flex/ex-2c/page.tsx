import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <>
    <div className='p-20 bg-red-200 text-center'>
    <div className='flex justify-between'>
       <div>
        <Image src={"/girl.jpeg"} width={150} height={150} alt='' className='object-cover object-top w-32 h-32 rounded-full'/>
        <h1>alexa karchi</h1>
        <h3>Web developer</h3>
       </div>
       <div>
        <Image src={"/girl.jpeg"} width={150} height={150} alt='' className='object-cover object-top w-32 h-32 rounded-full'/>
        <h1>alexa karchi</h1>
        <h3>Web developer</h3>
       </div>
       <div>
        <Image src={"/girl.jpeg"} width={150} height={150} alt='' className='object-cover object-top w-32 h-32 rounded-full'/>
        <h1>alexa karchi</h1>
        <h3>Web developer</h3>
       </div>
       <div>
        <Image src={"/girl.jpeg"} width={150} height={150} alt='' className='object-cover object-top w-32 h-32 rounded-full'/>
        <h1>alexa karchi</h1>
        <h3>Web developer</h3>
       </div>
    </div>
    </div>
    
    </>
  )
}

export default Page