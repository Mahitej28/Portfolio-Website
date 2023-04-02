import React from 'react';
import html from'../assets/html.png';
import css from '../assets/css.png';
import reactIamge from '../assets/react.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import nextjs from '../assets/nextjs.png';
import graphql from '../assets/graphql.png';
import github from '../assets/github.png';



const Skills = () => {
    const skill=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-orange-500',
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-orange-500',
        },
        {
            id:4,
            src:tailwind,
            title:'Tailwind CSS',
            style:'shadow-orange-500',
        },
        {
            id:5,
            src:nextjs,
            title:'NextJs',
            style:'shadow-orange-500',
        },
        {
            id:6,
            src:github,
            title:'Gituub',
            style:'shadow-orange-500',
        },
        {
            id:7,
            src:graphql,
            title:'Graph',
            style:'shadow-orange-500',
        },
        {
            id:8,
            src:reactIamge,
            title:'React',
            style:'shadow-orange-500'
        },
    ];
  return (
    <div name='skills' className=' bg-gradient-to-b from-black to-gray-700 text-white w-full h-screen'>
        <div className='mx-auto max-w-screen-lg p-4 w-full h-full text-white flex flex-col'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-400 p-2 inline'>Skills</p>
            </div>
           <div className='grid grid-cols-2 sm:grid-cols-3 text-center gap-8 w-full py-8 px-12 sm:px-0'>
                {
                    skill.map(({id,src,title,style})=>(
                        <div key={id} className={`shadow-md py-2 duration-200 hover:scale-105 rounded-lg ${style}`}>
                            <img src={src} alt='html' className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills