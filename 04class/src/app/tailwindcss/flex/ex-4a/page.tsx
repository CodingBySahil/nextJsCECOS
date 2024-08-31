import React from 'react'
import {FaVideo} from 'react-icons/fa6'

const page = () => {
  return (
    <div className='bg-gray-200 w-full h-screen flex flex-col justify-center items-center'>
      <div className='bg-white px-12 py-6 flex flex-wrap justify-center items-center rounded-3xl'>
        <span className='bg-red-700 p-4 rounded-lg'>
          <FaVideo color='white' size={75}/>
        </span>
        <span className='text-3xl font-bold pl-5'>Vedio confernece</span>
      </div>
      <div className='my-10 flex justify-center items-center flex-wrap gap-12'>
        <div className='bg-white px-12 py-6 flex flex-wrap justify-center items-stretch rounded-3xl text-sm'>
          <span className='bg-red-700 p-4 rounded-lg mr-2'>
            <FaVideo color='white' size={75}/>
          </span>
          <span className='text-3xl font-bold border border-blue-800'>Stretch</span>
        </div>
        <div className='bg-white px-12 py-6 flex flex-wrap justify-center items-center rounded-3xl text-sm'>
          <span className='bg-red-700 p-4 rounded-lg mr-2'>
            <FaVideo color='white' size={75}/>
          </span>
          <span className='text-3xl font-bold border border-blue-800'>Center</span>
        </div>
        <div className='bg-white px-12 py-6 flex flex-wrap justify-center items-start rounded-3xl text-sm'>
          <span className='bg-red-700 p-4 rounded-lg mr-2'>
            <FaVideo color='white' size={75}/>
          </span>
          <span className='text-3xl font-bold border border-blue-800'>Start</span>
        </div>
        <div className='bg-white px-12 py-6 flex flex-wrap justify-center items-end rounded-3xl text-sm'>
          <span className='bg-red-700 p-4 rounded-lg mr-2'>
            <FaVideo color='white' size={75}/>
          </span>
          <span className='text-3xl font-bold border border-blue-800'>End</span>
        </div>
        <div className='bg-white px-12 py-6 flex flex-wrap justify-center items-baseline rounded-3xl text-sm'>
          <span className='bg-red-700 p-4 rounded-lg mr-2'>
            <FaVideo color='white' size={75}/>
          </span>
          <span className='text-3xl font-bold border border-blue-800'>Baseline</span>
        </div>
      </div>
    </div>
  )
}

export default page