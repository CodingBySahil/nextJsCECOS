import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full h-screen bg-cyan-400 pt-24'>
      <div className='p-20 bg-white text-center flex justify-between flex-wrap w-[75vw] rounded-3xl shadow-2xl shadow-cyan-950 mx-auto'>
        <div>
          <Image src={"/girl.jpeg"} width={150} height={150} alt='' className='object-cover object-top w-32 h-32 rounded-full'/>
          <h1 className='font-bold text-xl' >alexa karchi 1</h1>
          <h3>Web developer</h3>
        </div>
        <div>
          <Image src={"/girl.jpeg"} width={150} height={150} alt='' className='object-cover object-top w-32 h-32 rounded-full'/>
          <h1 className='font-bold text-xl' >alexa karchi 2</h1>
          <h3>Web developer</h3>
        </div>
        <div>
          <Image src={"/girl.jpeg"} width={150} height={150} alt='' className='object-cover object-top w-32 h-32 rounded-full'/>
          <h1 className='font-bold text-xl' >alexa karchi 3</h1>
          <h3>Web developer</h3>
        </div>
        <div>
          <Image src={"/girl.jpeg"} width={150} height={150} alt='' className='object-cover object-top w-32 h-32 rounded-full'/>
          <h1 className='font-bold text-xl' >alexa karchi 4</h1>
          <h3>Web developer</h3>
        </div>
      </div>
      <div className='p-20 bg-white text-center flex justify-between flex-wrap-reverse w-[75vw] rounded-3xl shadow-2xl shadow-cyan-950 mx-auto mt-10'>
        <div>
          <Image src={"/girl.jpeg"} width={150} height={150} alt='' className='object-cover object-top w-32 h-32 rounded-full'/>
          <h1 className='font-bold text-xl' >alexa karchi 1</h1>
          <h3>Web developer</h3>
        </div>
        <div>
          <Image src={"/girl.jpeg"} width={150} height={150} alt='' className='object-cover object-top w-32 h-32 rounded-full'/>
          <h1 className='font-bold text-xl' >alexa karchi 2</h1>
          <h3>Web developer</h3>
        </div>
        <div>
          <Image src={"/girl.jpeg"} width={150} height={150} alt='' className='object-cover object-top w-32 h-32 rounded-full'/>
          <h1 className='font-bold text-xl' >alexa karchi 3</h1>
          <h3>Web developer</h3>
        </div>
        <div>
          <Image src={"/girl.jpeg"} width={150} height={150} alt='' className='object-cover object-top w-32 h-32 rounded-full'/>
          <h1 className='font-bold text-xl' >alexa karchi 4</h1>
          <h3>Web developer</h3>
        </div>
      </div>
    
    </div>
  )
}

export default Page