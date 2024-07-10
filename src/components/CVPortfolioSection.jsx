import React from 'react'
import InstagramLogo from '/logo/InstagramLogo.png'
import { Button } from 'flowbite-react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import portfolio from './../assets/Portfolio Wisnu Andika_compressed.pdf'
import cv from './../assets/CV_Wisnu_Andika.pdf'
import { Carousel } from 'flowbite-react';
import { ProgressBar } from '@react-pdf-viewer/core';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

export default function CVPortfolioSection() {
  const getFilePluginInstanceCV = getFilePlugin({
    fileNameGenerator: (file) => `download-${file.name}`
  })

  const getFilePluginInstancePortfolio = getFilePlugin({
    fileNameGenerator: (file) => `download-${file.name}`
  })

  const { DownloadButton: DownloadButtonCV } = getFilePluginInstanceCV
  const { DownloadButton: DownloadButtonPortfolio } = getFilePluginInstancePortfolio

  return (
    <div id='pdf' className=' h-full bg-gradient-to-l from-[#041116] via-[#121F23] to-[#2C3031] md:px-20 px-8 flex flex-col items-center justify-center'>
      {/* title */}
      <div data-aos="fade-up-right" data-aos-duration="1000" className='lg:text-[52px] md:text-5xl text-3xl font-bold text-white my-7 relative cv'>
        CV & Portfolio
      </div>

      {/* pdf viewer */}
      <div data-aos="fade-up-right" data-aos-duration="1000">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Carousel className='w-96 md:w-[800px] 2xl:w-[1000px] h-[500px] md:h-[750px] p-5 rounded-lg' slide={false}>
            <Viewer
              plugins={[getFilePluginInstanceCV]}
              enableSmoothScroll
              renderLoader={(percentages) => (
                <div style={{ width: '240px' }}>
                  <ProgressBar progress={Math.round(percentages)} />
                </div>
              )}
              theme={'dark'}
              fileUrl={cv}
            />
            <Viewer
              plugins={[getFilePluginInstancePortfolio]}
              enableSmoothScroll
              renderLoader={(percentages) => (
                <div style={{ width: '240px' }}>
                  <ProgressBar progress={Math.round(percentages)} />
                </div>
              )}
              theme={'dark'}
              fileUrl={portfolio}
            />
          </Carousel>
        </Worker>

      </div>

      {/* download button */}
      <div data-aos="fade-right" data-aos-duration="1000" className='w-fit flex gap-3 mb-10'>
        <div className='flex flex-col gap-2 justify-center items-center '>
          <p className='font-bold text-white'>CV</p>
          <div className='bg-white/25 p-0 rounded-md hover:bg-white/100'>
            <DownloadButtonCV />
          </div>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center '>
          <p className='font-bold text-white'>Portfolio</p>
          <div className='bg-white/25 p-0 rounded-md hover:bg-white/100'>
            <DownloadButtonPortfolio />
          </div>
        </div>
      </div>
    </div>
  )
}
