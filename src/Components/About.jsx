import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-700 via-black to-black text-white'>
       <div className=' max-w-screen-lg flex flex-col justify-center mx-auto p-4 w-full h-full'>
        <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className=' text-xl mt-18'>amidncbnhdbvhdfvnjdsk c Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi doloribus culpa suscipit voluptatibus, in consectetur veniam aperiam nulla officiis accusamus laudantium, 
            sapiente fugiat adipisci voluptate atque dolores nihil neque nesciunt.</p>
        <br/>
        <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sequi molestias dignissimos incidunt, officia tempore nulla nesciunt, 
            repellendus reprehenderit harum ipsa sapiente qui! Officia voluptate culpa nam perferendis praesentium molestias!</p>
       </div>
    </div>
  )
}

export default About