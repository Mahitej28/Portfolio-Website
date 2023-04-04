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
        <div name="skills" className="bg-gradient-to-b from-black to-cyan-900 w-full h-screen">
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-500px">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-18 position">
                Skills
              </p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {skill.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-14 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Skills