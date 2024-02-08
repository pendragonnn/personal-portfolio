import React from 'react'
import { Button } from 'flowbite-react';
import shoestock from '/image/shoestock.png'
import ecommercecatalogue from '/image/ecommercecatalogue.png'
import qwords from '/image/qwords.png'
import minimovielibrary from '/image/minimovielibrary.png'
import rakatour from '/image/rakatour.png'
import arraygame from '/image/arraygame.png'

export default function PortfolioGallerySection() {
  const portfolioData = [
    { id: 1, title: 'ShoeStock', techStack: 'ExpressJs, PostgreSQL, Sequelize, NextJs, TailwindCSS, Daisy UI', imgSrc: shoestock, url: 'https://github.com/pendragonnn/final-project-inventory-web.git', liveDemo: false },

    { id: 2, title: 'E-Commerce Catalogue', techStack: 'VueJs', imgSrc: ecommercecatalogue, url: 'https://github.com/pendragonnn/final-project-inventory-web.git', liveDemo: true, liveDemoUrl: 'https://ecommerce-catalog-three.vercel.app/' },

    { id: 3, title: 'Re-design Qwords Landing Page', techStack: 'Laravel, React, InertiaJs, TailwindCSS', imgSrc: qwords, url: 'https://github.com/pendragonnn/final-task-qwords-pbi.git', liveDemo: true, liveDemoUrl: 'https://final-task-qwords-pbi-demo-version.vercel.app/' },

    { id: 4, title: 'Mini Movie Library', techStack: 'NextJs, React-Bootstrap', imgSrc: minimovielibrary, url: 'https://github.com/pendragonnn/Mini-Movie-Library.git', liveDemo: true, liveDemoUrl: 'https://mini-movie-library.vercel.app/' },

    { id: 5, title: 'RakaTour', techStack: 'HTML, CSS, Bootstrap', imgSrc: rakatour, url: 'https://github.com/pendragonnn/RakaTour', liveDemo: true, liveDemoUrl: 'https://pendragonnn.github.io/RakaTour/' },

    { id: 6, title: 'Array Game', techStack: 'HTML, CSS, Bootstrap', imgSrc: arraygame, url: 'https://github.com/pendragonnn/Array-Game.git', liveDemoUrl: true, liveDemo: 'https://pendragonnn.github.io/Array-Game/' },
  ]

  return (
    <div id='portfolio' className='h-fit bg-gradient-to-tr from-[#041116] via-[#121F23] to-[#2C3031] lg:px-32 px-8 py-16 flex flex-col justify-center items-center'>
      {/* title */}
      <div className='lg:text-[52px] md:text-5xl text-3xl font-bold text-white w-fit border-b-4 mb-2'>
        Portfolio Gallery
      </div>
      {/* card */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-4 p-2 gap-6 w-fit'>
        {/* {portfolioData.map(portfolio => (
          <Card
          className="max-w-sm min-h-[400px] relative"
          imgAlt="Portfolio Picture"
          imgSrc={portfolio.imgSrc}
          key={portfolio.id}
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {portfolio.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Build With: {portfolio.techStack}
          </p>
          <div className='flex gap-2 my-3 absolute bottom-0'>
            <Button size={'md'} href={portfolio.url} target='_blank'>See Repository</Button>
            {portfolio.liveDemo ? (
              <Button size={'md'} href={portfolio.liveDemoUrl} target='_blank'>Live Demo</Button>
            ) : ''}
          </div>
        </Card>
        ))} */}

        {portfolioData.map(portfolio => (
          <div className='flex flex-col p-3 bg-white/20 min-h-[425px] max-w-sm rounded-lg relative hover:scale-105 hover:duration-100' key={portfolio.id}>
            {/* image container */}
            <img src={portfolio.imgSrc} alt="" className='object-cover hover:object-contain h-full rounded' />
            {/* title and tech stack */}
            <div className='h-1/2 my-2'>
              <h5 className="text-2xl font-bold tracking-tight text-white">
                {portfolio.title}
              </h5>
              <p className="font-normal text-gray-400">
                Build With: {portfolio.techStack}
              </p>
            </div>

            {/* button */}
            <div className='flex gap-2 m-3 absolute bottom-0 left-0'>
              <Button className='bg-[#041116] text-white' size={'md'} href={portfolio.url} target='_blank'>See Repository</Button>
              {portfolio.liveDemo ? (
                <Button className='bg-[#041116] text-white' size={'md'} href={portfolio.liveDemoUrl} target='_blank'>Live Demo</Button>
              ) : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
