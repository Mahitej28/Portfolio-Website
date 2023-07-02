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
import selenium from '../assets/selenium.png';
import postman from '../assets/postman.png';
import python from '../assets/python.png';
import c from '../assets/c.png'



const Skills = () => {
    const skill=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500',
            category: 'frontend'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500',
            category: 'frontend'
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500',
            category: 'frontend'
        },
        {
            id:4,
            src:tailwind,
            title:'Tailwind CSS',
            style:'shadow-cyan-500',
            category: 'frontend'
        },
        {
            id:5,
            src:saas,
            title:'Saas CSS',
            style:'shadow-pink-500',
            category: 'frontend'
        },
        {
            id:6,
            src:node,
            title:'Node JS',
            style:'shadow-green-500',
            category: 'backend'
        },
        {
            id:7,
            src:express,
            title:'Express Js',
            style:'shadow-white',
            category: 'backend'
        },
        {
            id:8,
            src:reactIamge,
            title:'React',
            style:'shadow-blue-400',
            category: 'frontend'
        },
        {
            id:9,
            src:mongo,
            title:'Mongo DB',
            style:'shadow-green-700',
            category: 'database'
        },

        {
            id:10,
            src:sql,
            title:'My SQL',
            style:'shadow-teal-500',
            category: 'database'
        },

        {
            id:11,
            src:github,
            title:'Git',
            style:'shadow-gray-200',
            category: 'tool'
        },

        {
            id:12,
            src:figma,
            title:'Figma',
            style:'shadow-purple-500',
            category: 'tool'
        },

        {
            id:13,
            src:material,
            title:'Material UI',
            style:'shadow-blue-500',
            category: 'frontend'
        },

        {
          id:14,
          src:selenium,
          title:'Selenium',
          style:'shadow-white',
          category: 'tool'
      },

      {
        id:15,
        src:postman,
        title:'Postman',
        style:'shadow-orange-500',
        category: 'tool'
    },

    {
      id:16,
      src:python,
      title:'Python',
      style:'shadow-yellow-500',
      category: 'language'
   },

   {
    id:15,
    src:c,
    title:'c++',
    style:'shadow-blue-500',
    category: 'language'
  },
    ];

    const frontend = skill.filter((s)=> s.category==='frontend');
    const backend = skill.filter((s)=> s.category==='backend');
    const tool = skill.filter((s)=> s.category==='tool');
    const database = skill.filter((s)=> s.category==='database');
    const language = skill.filter((s)=> s.category==='language');

    return (
        <div name="skills" className="bg-gradient-to-b from-black to-cyan-900 w-full md:min-h-screen pt-12">
          <div className="max-w-screen-lg mx-auto p-4 text-white pt-500px">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-18">
                Skills
              </p>
            </div>

          <div className='mt-10'> 

            <p className="text-4xl font-bold"> Frontend</p>
              <div className="w-full grid sm:grid-cols-1 md:grid-cols-5 gap-10 text-center py-8 px-8 sm:px-0">
                {frontend.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} w-40`}
                  >
                    <img src={src} alt="" className="w-10 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                  
                ))}
            </div>
          
          </div>
           
          <div className='mt-10'>
            <p className="text-4xl font-bold">Backend</p>
              <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-10 text-center py-8 px-12 sm:px-0">
                {backend.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} w-40`}
                  >
                    <img src={src} alt="" className="w-10 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                  
                ))}
              </div>
          </div>

          <div className='mt-10'>

            <p className="text-4xl font-bold"> Database</p>
              <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-10 text-center py-8 px-12 sm:px-0">
                {database.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} w-40`}
                  >
                    <img src={src} alt="" className="w-10 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                  
                ))}
              </div>

          </div>

          <div className='mt-10'>
            <p className="text-4xl font-bold">Languages</p>
              <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-10 text-center py-8 px-12 sm:px-0">
                {language.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} w-40`}
                  >
                    <img src={src} alt="" className="w-10 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                  
                ))}
              </div>
          </div>


          <div className='mt-10'>
            <p className="text-4xl font-bold">Tools</p>
              <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-10 text-center py-8 px-12 sm:px-0">
                {tool.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} w-40`}
                  >
                    <img src={src} alt="" className="w-10 mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                  
                ))}
            </div>

          </div>
          </div>
        </div>
      );
    };

export default Skills