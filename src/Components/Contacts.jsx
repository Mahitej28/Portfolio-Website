import React from 'react'

const Contacts = () => {
  return (
    <div name='Contacts' className='bg-gradient-to-b from-black to-gray-700 w-full h-screen p-4 text-white'>
      <div className='flex flex-col max-w-screen-lg mx-auto p-4 h-full justify-center'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/264c4016-27c2-496e-9ef9-0b6d1fd915d3' method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type='text' name='name' placeholder='Name*' className='p-2 bg-transparent border-2 text-white rounded-md focus:outline-none'/>
            <input type='text' name='email' placeholder='Email*' className='my-6 p-2 bg-transparent border-2 text-white rounded-md focus:outline-none'/>

            <textarea name='message' rows='10' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Message*'></textarea>
            <button className='bg-gradient-to-b from-cyan-500 to-blue-500 text-white mx-auto flex items-center my-8 px-6 py-3 duration-300 hover:scale-110 rounded-md font-semibold'>Let's Talk!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts