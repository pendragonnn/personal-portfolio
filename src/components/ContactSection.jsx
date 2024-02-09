import React from 'react'
import InstagramLogo from '/logo/InstagramLogo.png'
import { Button } from 'flowbite-react';

export default function ContactSection() {
  return (
    <div id='contact' className=' h-fit bg-gradient-to-b from-[#041116] via-[#121F23] to-[#2C3031] md:px-20 px-16 flex flex-col items-center justify-center'>
      {/* title */}
      <div className='lg:text-[52px] md:text-5xl text-3xl font-bold text-white my-7 relative contact'>
        Contact Me
      </div>

      {/* form */}
      <form action="https://getform.io/f/2683a815-7b41-485c-982f-03e4a6f15e4a" method='POST' className='flex flex-col lg:w-4/12 w-full '>
        <label htmlFor="name" className='text-white md:text-2xl text-base font-bold mb-2'>Name</label>
        <input type="text" id='name' name='name' className='rounded-xl bg-transparent border-white mb-5 text-white focus:shadow-[0px_0px_30px_5px] focus:shadow-[#1066FC]' required maxLength={30} />

        <label htmlFor="email" className='text-white md:text-2xl text-base font-bold mb-2'>Email</label>
        <input type="email" id='email' name='email' className='rounded-xl bg-transparent border-white mb-5 text-white focus:shadow-[0px_0px_30px_5px] focus:shadow-[#1066FC]' required maxLength={50}/>

        <label htmlFor="message" className='text-white md:text-2xl text-base font-bold mb-2'>Message</label>
        <textarea id='message' name='message' className='bg-transparent border-white rounded-xl text-white resize-none focus:shadow-[0px_0px_30px_5px] focus:shadow-[#1066FC]' rows={10} required />

        {/* button container */}
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-y-5 my-5'>
          <button className='bg-white font-bold rounded-full p-2 w-full text-xl hover:bg-[#1066FC] hover:text-white hover:duration-200 hover:shadow-[0px_0px_15px_5px] hover:shadow-[#1066FC]' type='submit'>Send</button>
          <Button type='button' href='https://www.instagram.com/wisnu_andk/' target='_blank' className='bg-white font-bold rounded-full md:p-2 p-1 w-full flex items-center justify-center gap-2 text-black hover:bg-[#EE83FC] hover:duration-200 hover:shadow-[0px_0px_15px_5px] hover:shadow-[#EE83FC]'>
            <img src={InstagramLogo} alt="instagram logo" className='md:h-[30px] h-[30px]' />
            <div className='ml-2 text-xl'>
              wisnu_andk
            </div>
          </Button>
        </div>
      </form>
    </div>
  )
}
