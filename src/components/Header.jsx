import React from 'react'
import html from '/logo/html.png'
import css from '/logo/css.png'
import git from '/logo/git.png'
import js from '/logo/js.png'
import react from '/logo/react.png'
import tailwind from '/logo/tailwind.png'

export default function Header() {
  const logos = [
    {id: 1, imageUrl: html, alt: 'html logo'},
    {id: 2, imageUrl: css, alt: 'css logo'},
    {id: 3, imageUrl: git, alt: 'git logo'},
    {id: 4, imageUrl: js, alt: 'js logo'},
    {id: 5, imageUrl: react, alt: 'react logo'},
    {id: 6, imageUrl: tailwind, alt: 'tailwind logo'},
  ]
  
  return (
    <>
      {/* container */}
      <div id='header' className='h-screen bg-gradient-to-tr from-[#041116] via-[#121F23] to-[#2C3031] flex flex-col text-center justify-center items-center'>
        {/* Name */}
        <div className='lg:text-[75px] md:text-3xl text-xl text-white font-bold py-10'>
          <span>Hello</span>, I'm Wisnu Andika
        </div>

        {/* Description */}
        <div className='lg:text-3xl md:text-2xl text-xl font-light text-white my-10 w-1/2 mx-auto'>
          An ungraduated student who have interest in frontend website roles
        </div>

        <hr className='w-1/4'/>

        {/* Tech Stack */}
        <div className='flex flex-col justify-center items-center gap-2 mt-10'>
          {/* title */}
          <div className='lg:text-3xl text-xl text-white font-bold'>
            Tech Stack
          </div>
          {/* logo */}
          <div className='flex items-center justify-center flex-wrap w-1/2 md:w-fit'>
            {logos.map(logo => (
              <img src={logo.imageUrl} alt={logo.alt} key={logo.id} className='lg:w-[70px] md:w-[50px] w-[35px] object-fill' />
            ))}
          </div>
          
        </div>
      </div>
    </>
  )
}
