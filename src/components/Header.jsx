import React from 'react'
import html from '/logo/html.png'
import css from '/logo/css.png'
import git from '/logo/git.png'
import js from '/logo/js.png'
import react from '/logo/react.png'
import tailwind from '/logo/tailwind.png'

export default function Header() {
  return (
    <>
      {/* container */}
      <div className='h-screen bg-gradient-to-tr from-[#041116] via-[#121F23] to-[#2C3031] flex flex-col text-center justify-center items-center'>
        {/* Name */}
        <div className='text-[75px] text-white font-bold'>
          <span>Hello</span>, I'm Wisnu Andika
        </div>

        {/* Description */}
        <div className='text-3xl font-light text-white my-10 w-1/2 mx-auto'>
          An ungraduated student who have interest in frontend website roles
        </div>

        <hr className='w-1/4'/>

        {/* Tech Stack */}
        <div className='flex flex-col justify-center items-center gap-2 mt-10'>
          {/* title */}
          <div className='text-3xl text-white font-bold'>
            Tech Stack
          </div>
          {/* logo */}
          <div className='flex items-center'>
            <img src={html} alt="html logo" />
            <img src={css} alt="css logo" />
            <img src={js} alt="js logo" />
            <img src={react} alt="react logo" />
            <img src={git} alt="git logo" />
            <img src={tailwind} alt="tailwind logo" />
          </div>
          
        </div>
      </div>
    </>
  )
}
