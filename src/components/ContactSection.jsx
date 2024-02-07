import React from 'react'
import InstagramLogo from '/logo/InstagramLogo.png'

export default function ContactSection() {
  return (
    <div id='contact' className='h-screen bg-gradient-to-b from-[#041116] via-[#121F23] to-[#2C3031] px-20 flex flex-col items-center justify-center'>
      {/* title */}
      <div className='text-white text-[52px] font-bold text-center'>
        Contact Me
      </div>

      {/* form */}
      <form action="https://getform.io/f/2683a815-7b41-485c-982f-03e4a6f15e4a" method='POST' className='flex flex-col w-4/12'>
        <label htmlFor="name" className='text-white text-2xl font-bold mb-2'>Name</label>
        <input type="text" id='name' name='name' className='rounded-xl bg-transparent border-white mb-5 text-white' required maxLength={30} />

        <label htmlFor="email" className='text-white text-2xl font-bold mb-2'>Email</label>
        <input type="email" id='email' name='email' className='rounded-xl bg-transparent border-white mb-5 text-white' required maxLength={50}/>

        <label htmlFor="message" className='text-white text-2xl font-bold mb-2'>Message</label>
        <textarea id='message' name='message' className='bg-transparent border-white rounded-xl text-white resize-none' rows={10} required />

        {/* button container */}
        <div className='grid grid-cols-2 gap-x-5 my-5'>
          <button className='bg-white font-bold rounded-full p-2 w-full' type='submit'>Send</button>
          <button type='submit' className='bg-white font-bold rounded-full p-2 w-full flex items-center justify-center gap-2'>
            <img src={InstagramLogo} alt="instagram logo" className='h-[30px]' />
            <div>
              wisnu_andk
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}
