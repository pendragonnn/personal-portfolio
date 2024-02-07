import React from 'react'
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
    { id: 3, imageUrl: PortfolioLogo, href: '#portfolio', blank: false},
    { id: 4, imageUrl: MessageLogo, href: '#message', blank: false},
    { id: 5, imageUrl: CVLogo, href: '/cv/CVWisnuAndika.pdf', blank: true },
    { id: 6, imageUrl: GithubLogo, href: 'https://github.com/pendragonnn', blank: true },
    { id: 7, imageUrl: LinkedinLogo, href: 'https://linkedin.com/in/wisnuandika', blank: true },
  ]

  return (
    <div className='fixed h-screen flex items-center bg-transparent'>
      {/* Sidebar icon */}
      <div className='h-[500px] w-[78px] bg-white/20 rounded-tr-xl rounded-br-xl flex flex-col items-center justify-center gap-y-4'>
        {logos.map(logo => (
          <a href={logo.href} target={logo.blank ? '_blank' : ''}>
            <img className='w-[50px]' key={logo.index} src={logo.imageUrl}  />
          </a>
        ))}
      </div>
    </div>
  )
}
