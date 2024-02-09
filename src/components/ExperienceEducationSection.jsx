import React from 'react'

export default function ExperienceEducationSection() {
  const experienceData = [
    { id: 1, month: 'December 2023 - January 2024', title: 'Project-Based Virtual Intern: Fullstack Developer - Qwords X Rakamin Academy' },
    { id: 2, month: 'October 2023 - November 2023', title: 'Project-Based Virtual Intern: Front End Developer - Core Initiative X Rakamin Academy' },
    { id: 3, month: 'August 2023 - December 2023', title: 'Final Project Rakamin Academy Fullstack Web Development Intensive Bootcamp X Kampus Merdeka : ShoesStock' }
  ]

  const educationData = [
    { id: 1, month: 'August 2021 - Present', title: 'Informatics - Faculty of Computer Science, Universitas Pembangunan Nasional Jakarta'},
    { id: 2, month: 'August 2023 - December 2023', title: 'Rakamin Academy Fullstack Web Development Intensive Bootcamp X Kampus Merdeka'},
  ]
  return (
    <>
      <div id='experience' className='h-fit bg-gradient-to-br from-[#041116] via-[#121F23] to-[#2C3031]'>
        {/* container */}
        <div className='h-full flex flex-col lg:flex-row items-center justify-center lg:px-32 px-10 gap-7 lg:py-20 py-5'>
          {/* experience section */}
          <div className='lg:w-1/2 w-full md:px-3 lg:border-r-2 '>
            {/* title */}
            <div data-aos="fade-right" data-aos-duration="1000" className='lg:text-[52px] md:text-5xl text-3xl w-fit font-bold mb-7 text-white experience relative'>
              Experience
            </div>
            {/* experience */}
            <div className='flex flex-col gap-y-8'>
              {experienceData.map(experience => (
                <div data-aos="zoom-in-right" data-aos-duration="1000" key={experience.id}>
                  {/* experience month */}
                  <div className='font-light lg:text-xl text-base text-white'>
                    {experience.month}
                  </div>
                  {/* experience title */}
                  <div className='lg:text-3xl md:text-2xl gradient-experience text-xl font-semibold'>
                    {experience.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* education section */}
          <div className='lg:w-1/2 w-full md:px-3'>
            {/* title */}
            <div data-aos="fade-left" data-aos-duration="1000" className='lg:text-[52px] md:text-5xl text-3xl font-bold text-white mb-7 w-fit education relative'>
              Education
            </div>
            {/* education */}
            <div className='flex flex-col gap-y-8'>
              {educationData.map(education => (
                <div data-aos="zoom-in-left" data-aos-duration="1000" key={education.id}>
                  {/* education month */}
                  <div className='font-light lg:text-xl text-base text-white'>
                    {education.month}
                  </div>
                  {/* education title */}
                  <div className='lg:text-3xl md:text-2xl gradient-education text-xl font-semibold'>
                    {education.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
