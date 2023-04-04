import React from 'react';
import html from'../assets/html.png';
import css from '../assets/css.png';
import reactIamge from '../assets/react.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';
import express from '../assets/express.png'
import github from '../assets/github.png';
import saas from '../assets/saas.png';
import mongo from '../assets/mongo.png';
import sql from '../assets/sql.png';
import figma from '../assets/figma.png';
import material from '../assets/material.png';



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
            style:'shadow-blue-500',
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500',
        },
        {
            id:4,
            src:tailwind,
            title:'Tailwind CSS',
            style:'shadow-cyan-500',
        },
        {
            id:5,
            src:saas,
            title:'Saas CSS',
            style:'shadow-pink-500',
        },
        {
            id:6,
            src:node,
            title:'Node JS',
            style:'shadow-green-500',
        },
        {
            id:7,
            src:express,
            title:'Express Js',
            style:'shadow-white',
        },
        {
            id:8,
            src:reactIamge,
            title:'React',
            style:'shadow-blue-400'
        },
        {
            id:9,
            src:mongo,
            title:'Mongo DB',
            style:'shadow-green-700'
        },

        {
            id:10,
            src:sql,
            title:'My SQL',
            style:'shadow-teal-500'
        },

        {
            id:11,
            src:github,
            title:'Git',
            style:'shadow-gray-200'
        },

        {
            id:12,
            src:figma,
            title:'Figma',
            style:'shadow-purple-500'
        },

        {
            id:13,
            src:material,
            title:'Material UI',
            style:'shadow-blue-500'
        },
    ];
  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-700'>
        <div className= 'max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-400 inline p-2 '>Skills</p>
                <p className="py-6">These are few technologies I've worked with</p>
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