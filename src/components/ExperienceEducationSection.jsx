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
      <div id='experience' className='lg:h-screen bg-gradient-to-br from-[#041116] via-[#121F23] to-[#2C3031]'>
        {/* container */}
        <div className='h-full flex flex-col lg:flex-row items-center justify-center lg:px-32 px-10 gap-7 py-5 lg:py-0'>
          {/* experience section */}
          <div className='lg:w-1/2 w-full md:px-3 lg:border-r-2'>
            {/* title */}
            <div className='lg:text-[52px] md:text-5xl text-3xl font-bold text-white mb-3'>
              Experience
            </div>
            {/* experience */}
            <div className='flex flex-col gap-y-10'>
              {experienceData.map(experience => (
                <div key={experience.id} className='text-white'>
                  {/* experience month */}
                  <div className='font-light lg:text-xl text-base'>
                    {experience.month}
                  </div>
                  {/* experience title */}
                  <div className='lg:text-3xl md:text-2xl text-xl font-semibold'>
                    {experience.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* education section */}
          <div className='lg:w-1/2 w-full md:px-3'>
            {/* title */}
            <div className='lg:text-[52px] md:text-5xl text-3xl font-bold text-white my-3'>
              Education
            </div>
            {/* education */}
            <div className='flex flex-col gap-y-10'>
              {educationData.map(education => (
                <div key={education.id} className='text-white'>
                  {/* education month */}
                  <div className='font-light lg:text-xl text-base'>
                    {education.month}
                  </div>
                  {/* education title */}
                  <div className='lg:text-3xl md:text-2xl text-xl font-semibold'>
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
