import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import html from '/logo/html.png'
import css from '/logo/css.png'
import git from '/logo/git.png'
import js from '/logo/js.png'
import react from '/logo/react.png'
import tailwind from '/logo/tailwind.png'

export default function Header() {
  const logos = [
    { id: 1, imageUrl: html, alt: 'html logo' },
    { id: 2, imageUrl: css, alt: 'css logo' },
    { id: 3, imageUrl: git, alt: 'git logo' },
    { id: 4, imageUrl: js, alt: 'js logo' },
    { id: 5, imageUrl: react, alt: 'react logo' },
    { id: 6, imageUrl: tailwind, alt: 'tailwind logo' },
  ]

  return (
    <>
      {/* container */}
      <div id='header' className='h-screen py-20 bg-gradient-to-tr from-[#041116] via-[#121F23] to-[#2C3031] flex flex-col text-center justify-center items-center'>
        {/* Name */}
        <div className='lg:text-[52px] md:text-3xl flex items-center text-xl text-white font-bold'>
          <TypeAnimation sequence={[
            'Hello',
            1000,
            'Bonjour',
            1000,
            'Holla',
            1000,
            '你好',
            1000,
            'नमस्ते',
            1000,
            'こんにちは',
            1000,
            '안녕하세요',
            1000
          ]}
            speed={20}
            repeat={Infinity}>
          </TypeAnimation>
          , I'm
          <span className="relative name lg:h-28 md:h-20 h-14 ml-4 flex items-center">
            Wisnu Andika
          </span>
        </div>

        {/* Description */}
        <div className='lg:text-2xl md:text-xl text-base font-light text-white my-10 w-1/2 mx-auto'>
          An ungraduated student who have interest in frontend website roles
        </div>

        <hr className='w-1/4' />

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
