import React from 'react'
import { Carousel } from 'flowbite-react';

export default function PortfolioGallerySection() {
  return (
    <div id='portfolio' className='h-screen bg-gradient-to-tr from-[#041116] via-[#121F23] to-[#2C3031] px-20 flex flex-col items-center justify-center'>
      {/* title */}
      <div className='mb-5 text-center font-bold text-white text-5xl border-b-4 w-fit pb-5'>
        Portfolio Gallery
      </div>
      {/* container carousel */}
      <div className="h-[500px] w-[1140px]">
        <Carousel slide={false} >
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>
    </div>
  )
}
