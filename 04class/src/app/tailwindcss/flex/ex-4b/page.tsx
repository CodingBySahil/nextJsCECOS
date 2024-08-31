import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <>
        <div className='w-full h-screen flex flex-col justify-center items-center bg-cyan-400 p-16'>
            <div className='bg-white p-8 rounded-3xl flex justify-between items-center gap-8'>
                <div className=''>
                    <Image src={'/girl.jpeg'} width={200} height={200} alt='girl' className='object-cover object-top w-32 h-32 rounded-full'/>
                </div>
                <div className=''>
                    <h1 className='text-3xl font-bold'> Matt Copper </h1>
                    <h3 className='text-2xl'>Web Developer</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page