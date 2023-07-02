import React from 'react';
import linkedin from '../assets/linkedinbot.png'
import doctor from '../assets/doctor.png'
import image from '../assets/image.png'



const Projects = () => {
  const projects=[
    {
      id:1,
      src:linkedin,
      href:'https://github.com/Mahitej28/LinkedIn_Bot',
      title: 'LinkedIn Bot',
      desc: 'Automates the process of searching for public profiles on LinkedIn and exporting the data to an Excel sheet.'
    },
    {
      id:2,
      src:doctor,
      href:'https://github.com/Mahitej28/Doctor-Appointment-Scheduling-System',
      title: 'Doctor Appointment Scheduling System',
      desc: 'Efficiently manage and schedule appointments for doctors and patients'
    },
    {
      id:3,
      src:image,
      href:'https://github.com/Mahitej28/Image_uploader_to_s3',
      title: "Image Uploader to S3",
      desc: "Web Application that provides a user interface for selecting and uploading images to an Amazon S3 bucket."
    },
  ];
  return (
    <div name='projects' className=' bg-gradient-to-b from-cyan-900 to-black w-full  text-white md:h-screen'>
      <div className=' max-w-screen-lg  px-4 mx-auto pt-20 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</p>
          <p className='pt-6'>Check out some of my work here:</p>
        </div>

        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0 group'> 
        {
          projects.map(({id,src,href, title,desc})=>(
            <div key={id} className='bg-white/10 duration-500 p-4 rounded-xl cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 border-blue-300 border-2 '>
            <img src={src} alt='project' className=' hover:z-20 rounded-xl w-full h-30'/>
            <h4 className='text-xl font-bold pb-2 pt-4'>{title}</h4>
            <p className=' text-base pb-4'>{desc}</p>
            <div className=''>
            <a href={href} target='_blank' rel="noreferrer" className=" inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-blue-300 rounded-lg group bg-gradient-to-br from-blue-300 to-blue-500 group-hover:from-blue-300 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mx-auto">
              <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Source Code
              </span>
            </a>
            </div>
          </div>
          ))
        }
        </div>
        <a href='https://github.com/Mahitej28?tab=repositories' target='_blank' rel="noreferrer">
          <button className='bg-gradient-to-b from-blue-300 to-blue-500 text-white mx-auto flex items-center my-8 px-6 py-3 duration-300 hover:scale-110 rounded-md font-semibold'>View More</button>
        </a>
      </div>
    </div>
  )
}

export default Projects


