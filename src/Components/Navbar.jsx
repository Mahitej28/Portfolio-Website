import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import logo from'../assets/My_logo.png'


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id:1,
            link:"home",

        },
        {
            id:2,
            link:"about",

        },
        {
            id:3,
            link:"skills",

        },
        {
            id:4,
            link:"projects",

        },
        {
            id:5,
            link:"Blogs",

        },
        {
            id:6,
            link:"Contacts",

        },
    ];
    
  return (
    <div className='flex justify-between items-center w-full h-20
    text-white fixed px-4 bg-black'>
        <div>
        <img src={logo} alt="my logo" className='ml-2 w-40'/>
        </div>

        <ul className='hidden md:flex'>

            {links.map(({id, link}) => (
                 <li key={id} className='cursor-pointer capitalize px-4 font-medium text-gray-400 hover:scale-110 duration-200'><Link to={link} smooth duration={500}>{link}</Link></li>
            ))}
       </ul>

       <div onClick={()=> setNav(!nav)} className='cursor-pointer text-gray-400 pr-3 z-12  md:hidden'>
        {
            nav ? <FaTimes size={30}/> : <FaBars size={30}/>
        }
       </div>

    
       {nav && (
            <ul className='flex flex-col  bg-gradient-to-b from-black to bg-gray-800 justify-center items-center w-full h-screen absolute left-0 top-0 text-gray-400'>
                    
                {links.map(({id, link}) => (
                        <li key={id} className='text-4xl cursor-pointer capitalize px-4 py-6'>
                             <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth
                                duration={500}
                            >
                                {link}
                            </Link>
                        </li>
                ))}
           </ul>

        )}
    </div>
  )
}

export default Navbar