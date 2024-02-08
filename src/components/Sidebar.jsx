import React, { useState } from 'react'
import CVLogo from '/logo/sidebar/CVLogo.png'
import ExperienceLogo from '/logo/sidebar/ExperienceLogo.png'
import GithubLogo from '/logo/sidebar/GithubLogo.png'
import HomeLogo from '/logo/sidebar/HomeLogo.png'
import LinkedinLogo from '/logo/sidebar/LinkedinLogo.png'
import PortfolioLogo from '/logo/sidebar/PortfolioLogo.png'
import MessageLogo from '/logo/sidebar/MessageLogo.png'

export default function Sidebar() {
  const logos = [
    { id: 1, imageUrl: HomeLogo, href: '#header', blank: false },
    { id: 2, imageUrl: ExperienceLogo, href: '#experience', blank: false },
    { id: 3, imageUrl: PortfolioLogo, href: '#portfolio', blank: false },
    { id: 4, imageUrl: MessageLogo, href: '#contact', blank: false },
    { id: 5, imageUrl: CVLogo, href: '/cv/CVWisnuAndika.pdf', blank: true },
    { id: 6, imageUrl: GithubLogo, href: 'https://github.com/pendragonnn', blank: true },
    { id: 7, imageUrl: LinkedinLogo, href: 'https://linkedin.com/in/wisnuandika', blank: true },
  ]

  const [isActive, setIsActive] = useState(false);

  const onClickMenu = () => {
    setIsActive(!isActive);
  }

  return (
    <div className='fixed md:h-screen h-fit flex flex-col justify-center items-center bg-transparent z-10'>
      {/* sidebar trigger button */}
      <div className='md:hidden md:h-[50px] md:w-[50px] w-[40px] h-[40px] bg-white rounded-full m-2 p-2 flex justify-center items-center font-bold text-3xl cursor-pointer' onClick={onClickMenu}>
        {isActive ? <p>X</p> : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 72 72">
          <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
        </svg>}
      </div>
      {/* Sidebar icon */}

      <div className={`md:h-[500px] md:w-[78px] h-[400px] w-[58px] bg-white/20 rounded-tr-xl rounded-br-xl md:flex ${isActive ? 'flex' :'hidden'} flex-col items-center justify-center gap-y-4 ml-0`}>
        {logos.map(logo => (
          <a className='hover:animate-bounce' href={logo.href} key={logo.id} target={logo.blank ? '_blank' : ''}>
            <img className='md:w-[50px] w-[40px]' src={logo.imageUrl} />
          </a>
        ))}
      </div>
    </div>
  )
}
