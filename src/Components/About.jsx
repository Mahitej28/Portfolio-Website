import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-cyan-900 to-black text-white pb-5'>
       <div className=' max-w-screen-lg flex flex-col justify-center mx-auto p-4 w-full h-full'>
        <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p className=' text-xl mt-18 text-justify'>Hello, I am Mahima Churi a third-year CS student from India, a Full Stack Web Developer who likes to build stuff that leads to an efficient mark. 
          I am Highly responsible and organized individual with excellent writing and communication skills, along with critical thinking abilities and a deep understanding of web technologies and programming languages such as 
          HTML, CSS, JavaScript, and various server-side languages (Python, PHP, or Node.js).</p>
        <br/>
        <p className='text-xl text-justify'> Highly responsible and organized with excellent writing, communication, and critical thinking abilities.</p>

         <div className=' bg-slate-300 bg-opacity-10 rounded-md mt-10 border-slate-300  border-2'>   
         <ul className="list-disc pl-4 m-6 space-y-3">
            <li>Open Source Contributor at <a href='https://gssoc.girlscript.tech/' className=' font-bold'>GSSoC'23</a></li>
            <li>UI/UX Team Member at <a href='https://opensource.tcetmumbai.in/' className=' font-bold'>TCET Open Source</a></li>
            <li>TE Inhouse Lead at <b>CSI TCET</b></li>
            <li>Creative Lead at <b>Shastra-TCET</b></li>
          </ul>
          </div>  

       </div>
    </div>
  )
}

export default About