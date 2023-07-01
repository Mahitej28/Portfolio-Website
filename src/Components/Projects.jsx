import React from 'react';
import unit from'../assets/unit.png';
import tic from '../assets/tic-tac.png';
import calc from '../assets/calc.png'



const Projects = () => {
  const projects=[
    {
      id:1,
      src:unit,
      href:'https://github.com/Mahitej28/LinkedIn_Bot',
      title: 'LinkedIn Bot',
      desc: 'Automates the process of searching for public profiles on LinkedIn and exporting the data to an Excel sheet.'
    },
    {
      id:2,
      src:tic,
      href:'https://github.com/Mahitej28/Doctor-Appointment-Scheduling-System',
      title: 'Doctor Appointment Scheduling System',
      desc: 'Automates the process of searching for public profiles on LinkedIn and exporting the data to an Excel sheet.'
    },
    {
      id:3,
      src:calc,
      href:'https://github.com/Mahitej28/Scientific-Calculator',
      title: "Image Uploader to S3",
      desc: "Web Application that provides a user interface for selecting and uploading images to an Amazon S3 bucket."
    },
  ];
  return (
    <div name='projects' className=' bg-gradient-to-b from-cyan-900 to-black w-full  text-white md:h-screen'>
      <div className=' max-w-screen-lg pt-20 px-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</p>
          <p className='py-6'>Check out some of my work here:</p>
        </div>

        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 group'> 
        {
          projects.map(({id,src,href, title,desc})=>(
            <div key={id} className='bg-white/10 duration-500 p-8 rounded-xl cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100'>
            <img src={src} alt='project' className=' hover:z-20 rounded-md w-full pb-5'/>
            <h4 className='text-xl font-bold pb-2'>{title}</h4>
            <p className='text-sm pb-4'>{desc}</p>

            <a href={href} target='_blank' rel="noreferrer" className=" inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-cyan-500 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Repo
              </span>
            </a>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Projects


