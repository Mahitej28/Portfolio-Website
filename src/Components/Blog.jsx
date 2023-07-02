import React from 'react'
import reactImg from '../assets/reactImg.png';
import cloud from '../assets/cloud.jpg'

const Blog = () => {
    const projects=[
        {
          id:1,
          src:reactImg,
          href:'https://medium.com/@mahimachuri.28/10-reasons-why-react-js-is-the-future-of-web-development-9c4df6a09489',
          title: 'React JS, Future of Web Development!!',
          des:'As technology continues to evolve, web development has become an increasingly important field, and front-end frameworks such as ReactJS have emerged as crucial tools for building dynamic, user-friendly websites.'
        },
        {
          id:2,
          src:cloud,
          href:'https://hiimanshu.wixsite.com/web-whispers/post/cloud-computing-revolutionizing-the-way-we-store-and-access-data',
          title: 'Cloud Computing: Revolutionizing the Way We Store and Access Data',
          des: "Cloud has the ability to streamline and improve a variety of processes, So, fasten your seatbelts to dive into the exciting world of the cloud together"
        }
    ];

    return (
        <div name='Blogs' className=' bg-gradient-to-b from-black to-cyan-900 w-full  text-white md:h-screen'>
          <div className=' max-w-screen-lg pt-20 px-8 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Blogs</p>
              <p className='py-6'>Check out my recent blogs:</p>
            </div>
    
            <div className=' grid sm:grid-cols-2 md:grid-cols-2 gap-14 px-24 sm:px-0'> 
            {
              projects.map(({id,src, href, title, des})=>(
                <div key={id} className="max-w-sm  shadow-teal-300 rounded-lg shadow-md">
                        <img class="p-4 rounded-3xl" src={src} alt="Blog" />
                        <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                            <p class="mb-3 font-normal text-white text-justify">{des}</p>
                            <a href={href} target='_blank' rel="noreferrer" className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-cyan-500 rounded-lg group bg-gradient-to-br from-cyan-300 to-green-400 group-hover:from-cyan-300 group-hover:to-green-300 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Read More
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

export default Blog


