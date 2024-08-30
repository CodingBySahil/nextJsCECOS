import React from 'react'
import {FaVideo} from 'react-icons/fa6'

const page = () => {
  return (
    <div className='bg-gray-600 p-20'>

    <div className='bg-gray-200 w-[50rem] mx-auto p-6 flex justify-center items-center'>
        <FaVideo color='red' size={150}/>
        <h1 className='text-3xl font-bold pl-5'>Vedio confernece</h1>
    </div>
    </div>
  )
}

export default page