import React from 'react';
import heroImage from '../../src/assets/heroImage.png';
import {MdKeyboardDoubleArrowRight} from 'react-icons/md';

const Home = () => {
  return (
    <div name ='home' className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-700'>
        <div className=' max-w-screen-lg flex flex-col items-center justify-center px-4 h-full mx-auto md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className=" text-4xl sm:text-7xl font-bold text-white">Hey! I'm Mahima Churi</h2>
                <p className=' text-gray-400 py-4 max-w-md'>Mumbai based Full Stack Web Developer. With every line of code, I endeavor to create efficient web applications.</p>
                <div>
                    <button className='text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        <a href='https://linktr.ee/mahimachuri'  target='_blank' rel='noreferrer'>Get in Touch</a>
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardDoubleArrowRight className='ml-1 size={25}'/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={heroImage} alt='My profile' className=' rounded-2xl mx-auto w-2/3 md:w-80'/>
            </div>
        </div>
    </div>
  )
}

export default Home