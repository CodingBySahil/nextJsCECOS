import React from 'react'

const Page = () => {
  return (
   <div className='bg-green-700'>
    <div className='bg-gray-300 p-2 my-6'>
        <h1 className='text-center text-3xl text-white bg-gray-600 p-8 mb-6'>Justify Between</h1>
        <div className='flex bg-white text-5xl justify-between rounded-3xl px-6 py-3'>
            <a className='px-6 py-3 bg-blue-800 rounded-3xl text-white'>Profile</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Notification</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Payment</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Setting</a>
        </div>
    </div>
    
    <div className='bg-gray-300 p-2 my-6'>
        <h1 className='text-center text-3xl text-white bg-gray-600 p-8 mb-6'>Justify start</h1>
        <div className='flex bg-white text-5xl justify-start rounded-3xl px-6 py-3'>
            <a className='px-6 py-3 bg-blue-800 rounded-3xl text-white'>Profile</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Notification</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Payment</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Setting</a>
        </div>
    </div>
    <div className='bg-gray-300 p-2 my-6'>
        <h1 className='text-center text-3xl text-white bg-gray-600 p-8 mb-6'>Justify arround</h1>
        <div className='flex bg-white text-5xl justify-around rounded-3xl px-6 py-3'>
            <a className='px-6 py-3 bg-blue-800 rounded-3xl text-white'>Profile</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Notification</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Payment</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Setting</a>
        </div>
    </div>
    <div className='bg-gray-300 p-2 my-6'>
        <h1 className='text-center text-3xl text-white bg-gray-600 p-8 mb-6'>Justify evenly</h1>
        <div className='flex bg-white text-5xl justify-evenly rounded-3xl px-6 py-3'>
            <a className='px-6 py-3 bg-blue-800 rounded-3xl text-white'>Profile</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Notification</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Payment</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Setting</a>
        </div>
    </div>
    <div className='bg-gray-300 p-2 my-6'>
        <h1 className='text-center text-3xl text-white bg-gray-600 p-8 mb-6'>Justify stretch</h1>
        <div className='flex bg-white text-5xl justify-stretch rounded-3xl px-6 py-3'>
            <a className='px-6 py-3 bg-blue-800 rounded-3xl text-white'>Profile</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Notification</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Payment</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-500 rounded-3xl'>Setting</a>
        </div>
    </div>
   </div>

  )
}

export default Page