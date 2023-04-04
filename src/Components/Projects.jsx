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
      href1:'https://github.com/Mahitej28/Tic-Tac-Toe-Game',
      href2: 'https://tic-tac-toe-game-swart.vercel.app/'
    },
    {
      id:3,
      src:calc,
      href1:'https://github.com/Mahitej28/Scientific-Calculator',
      href2: 'https://scientific-calculator-seven.vercel.app/'
    },
  ];
  return (
    <div name='projects' className=' bg-gradient-to-b from-gray-700 to to-black w-full  text-white md:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</p>
          <p className='py-6'>Check out some of my work here:</p>
        </div>

        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> 
        {
          projects.map(({id,src, href1, href2})=>(
            <div key={id}className=' shadow-md shadow-gray-500 rounded-lg'>
            <img src={src} alt='project' className='duration-200 hover:scale-105 rounded-md w-full'/>
            <div className='flex items-center justify-center'>
              <a href={href1} className='w-1/2 duration-200 hover:scale-105 px-12 py-3 m-4' target='_blank' rel="noreferrer">Demo</a>
              <a href={href2} className='w-1/2 duration-200 hover:scale-105 px-12 py-3 m-4' target='_blank' rel="noreferrer">Repo</a>

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