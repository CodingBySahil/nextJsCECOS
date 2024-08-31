import React from 'react'

const Page = () => {
  return (
    <>
    <div className='w-screen h-screen bg-cyan-300 flex justify-center items-center'>
        <div className='w-96 p-8 rounded-3xl bg-cyan-100'>
            <h1 className='text-blue-600 text-4xl font-bold pb-5'>CSS Flex and Grid</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste corporis eveniet magnam sint accusamus quasi exercitationem atque modi et, possimus laborum, architecto rerum animi amet labore! Blanditiis, laudantium error? Libero omnis, inventore repellat eius corrupti iusto iure amet porro magni dolorem at sed. Rem ad mollitia dolor corrupti nulla consequuntur quasi iure obcaecati eos fugit quaerat aperiam ipsa, fugiat ipsum dignissimos sed doloremque tempore accusamus.
            </p>
            <div className='flex justify-between pt-8'>
                <button className='px-5 py-3 bg-blue-900 text-white rounded-2xl font-semibold cursor-pointer'>Next</button>
                <button className='px-5 py-3 bg-blue-900 text-white rounded-2xl font-semibold cursor-pointer'>Prev</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Page