import React from 'react';
import unit from'../assets/unit.png';
import tic from '../assets/tic-tac.png';
import calc from '../assets/calc.png'



const Projects = () => {
  const projects=[
    {
      id:1,
      src:unit,
      href1:'https://mahitej28.github.io/CodeClause_Unit-Converter_Mahima/',
      href2: 'https://github.com/Mahitej28/CodeClause_Unit-Converter_Mahima'
    },
    {
      id:2,
      src:tic,
      href2:'https://github.com/Mahitej28/Tic-Tac-Toe-Game',
      href1: 'https://tic-tac-toe-game-swart.vercel.app/'
    },
    {
      id:3,
      src:calc,
      href2:'https://github.com/Mahitej28/Scientific-Calculator',
      href1: 'https://scientific-calculator-seven.vercel.app/'
    },
  ];
  return (
    <div name='projects' className=' bg-gradient-to-b from-cyan-900 to-black w-full  text-white md:h-screen'>
      <div className=' max-w-screen-lg pt-20 px-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</p>
          <p className='py-6'>Check out some of my work here:</p>
        </div>

        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> 
        {
          projects.map(({id,src, href1, href2})=>(
            <div key={id}className=' shadow-md shadow-purple-500 rounded-lg'>
            <img src={src} alt='project' className='duration-200 hover:scale-105 rounded-md w-full'/>
            <div className='flex items-center justify-center py-6 space-x-10'>
            <a href={href1} target='_blank' rel="noreferrer" className=" inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-cyan-500 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Demo
              </span>
            </a>
            <a href={href2} target='_blank' rel="noreferrer" className=" inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-cyan-500 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Repo
              </span>
            </a>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Projects


