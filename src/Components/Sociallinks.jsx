import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Sociallinks = () => {

  const links = [
    {
      id:1,
      child:(
        <>LinkedIn <FaLinkedin size={30}/></>
      ),
      href: 'https://www.linkedin.com/in/mahimachuri/',
      style: 'rounded-tr-md'
    },

    {
      id:2,
      child:(
        <>Github <FaGithub size={30}/></>
      ),
      href: 'https://github.com/Mahitej28',
    },

    {
      id:3,
      child:(
        <>Mail <HiOutlineMail size={30}/></>
      ),
      href: 'mailto:mahimachuri.28@gmail.com',
    },

    {
      id:4,
      child:(
        <>Resume <BsFillPersonLinesFill size={30}/></>
      ),
      href: 'https://drive.google.com/file/d/1wQwCDQNI5syJV-pucRPdTD_AzCtiWga8/view?usp=sharing',
      style: 'rounded-br-md'
    },
  ];
  return (
    <div className=' hidden lg:flex flex-col fixed left-0 top-[35%]'>
      <ul>

        {links.map(({child,href, style,id})=>(
           <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 cursor-pointer ${style }`}>
           <a href={href} className='flex justify-between items-center w-full text-white' target='_blank' rel='noreferrer'>
             {child}
           </a>
         </li>
        ))}
      </ul>
    </div>
  )
}

export default Sociallinks