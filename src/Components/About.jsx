import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-cyan-900 to-black text-white'>
       <div className=' max-w-screen-lg flex flex-col justify-center mx-auto p-4 w-full h-full'>
        <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p className=' text-xl mt-18 text-justify'>Hello, I am Mahima Churi a third-year CS student from India, a Full Stack Web Developer who likes to build stuff that leads to an efficient mark. 
          I am Highly responsible and organized individual with excellent writing and communication skills, along with critical thinking abilities and a deep understanding of web technologies and programming languages such as 
          HTML, CSS, JavaScript, and various server-side languages (Python, PHP, or Node.js).</p>
        <br/>
        <p className='text-xl text-justify'> At the Institute level, I have worked on modest projects and improved my coding abilities. I have a love for building superior web applications that provide outstanding user experiences. Building effective applications that meet community requirements using various front-end frameworks, 
        such as React, Angular, and back-end frameworks, such as Express, Django, etc., intrigues me.</p>
       </div>
    </div>
  )
}

export default About