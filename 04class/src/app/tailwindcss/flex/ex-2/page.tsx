import React from 'react'

const Page = () => {
  return (
   <div className='bg-cyan-600 p-16'>
    <h1 className='text-lg m-4'>Justify start</h1>
    <div className='flex bg-white text-sm justify-start rounded-3xl px-6 py-3'>
        <a className='px-6 py-3 bg-blue-800 rounded-3xl text-white'>Profile</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Notification</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Payment</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Setting</a>
    </div>
    <h1 className='text-lg m-4'>Justify end</h1>
    <div className='flex bg-white text-sm justify-end rounded-3xl px-6 py-3'>
        <a className='px-6 py-3 bg-blue-800 rounded-3xl text-white'>Profile</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Notification</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Payment</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Setting</a>
    </div>
    <h1 className='text-lg m-4'>Justify Center</h1>
    <div className='flex bg-white text-sm justify-center rounded-3xl px-6 py-3'>
        <a className='px-6 py-3 bg-blue-800 rounded-3xl text-white'>Profile</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Notification</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Payment</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Setting</a>
    </div>
    <h1 className='text-lg m-4'>Justify Arround</h1>
    <div className='flex bg-white text-sm justify-around rounded-3xl px-6 py-3'>
        <a className='px-6 py-3 bg-blue-800 rounded-3xl text-white'>Profile</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Notification</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Payment</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Setting</a>
    </div>
    <h1 className='text-lg m-4'>Justify between</h1>
    <div className='flex bg-white text-sm justify-between rounded-3xl px-6 py-3'>
        <a className='px-6 py-3 bg-blue-800 rounded-3xl text-white'>Profile</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Notification</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Payment</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Setting</a>
    </div>
    <h1 className='text-lg m-4'>Justify evenly</h1>
    <div className='flex bg-white text-sm justify-evenly rounded-3xl px-6 py-3'>
        <a className='px-6 py-3 bg-blue-800 rounded-3xl text-white'>Profile</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Notification</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Payment</a>
        <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Setting</a>
    </div>
   </div>

  )
}

export default Page