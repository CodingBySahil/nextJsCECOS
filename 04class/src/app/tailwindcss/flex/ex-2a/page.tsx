import React from 'react'

const Page = () => {
  return (
    <>
    <div className='bg-blue-50 p-24 my-6 border shadow-lg'>
        {/* <h1 className='text-center text-3xl text-white bg-gray-600 p-8 mb-6'>Justify Between</h1> */}
        <div className='flex bg-white text-xl justify-between rounded-3xl px-6 py-3'>
            <a className='px-6 py-3 bg-blue-800 rounded-3xl text-white'>Profile</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Notification</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Payment</a>
            <a className='px-6 py-3 bg-gray-200 text-gray-900 rounded-3xl'>Setting</a>
        </div>
    </div>
</>
  )
}

export default Page