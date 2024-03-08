import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
]

const Footer = () => {
  return (
    <div className='max-w-[1000px] m-auto border-t border-[#4C4C4B] p-5'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>PIALK</h1>
        <div className='flex items-center gap-5 py-5'>
          {navigation.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
              >
                {item.name}
              </a>
            )
          })}
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-sm'>Copyright © 2023 YUPHAWADEE</p>
        <a href='https://github.com/yuphawadee?tab=repositories' target="_blank">
        <FaGithub className='text-xl'/>
        </a>
      </div>

    </div>
  )
}

export default Footer