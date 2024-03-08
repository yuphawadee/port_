import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const work = [
    {
      name: 'Fitness',
      href: 'https://www.figma.com/file/HeXdN3Rq30LGNeMFdrj2LH/fitness?type=design&node-id=0%3A1&mode=dev&t=2qVOQFEfU5eobZY0-1',
      image: '1.png',
      category: 'Design'
    },
    {
      name: 'E-Commerce',
      href: 'https://www.figma.com/file/p8sBh5RP6QuWlMNEzoJR20/E-Commerce?type=design&node-id=0%3A1&mode=dev&t=6mOOOCf4JNv7zXnw-1',
      image: '2.png',
      category: 'Design'
    },
    {
      name: 'Resturant',
      href: 'https://www.figma.com/file/seCwmM4zzWIv4GXPngs1gQ/pizza?type=design&node-id=0%3A1&mode=dev&t=LajYOjV90QHKfjRX-1',
      image: '3.png',
      category: 'Design'
    },
    {
      name: 'Adpay Project',
      href: 'https://addpaycrypto.com/addpay_eoffice/login',
      image: '4.png',
      category: 'Web'
    },
    {
      name: 'CRUD + Bootsrtap',
      href: 'https://addpaycrypto.com/port_intern/ubu/yuphawadee/',
      image: '5.png',
      category: 'Web'
    },
    {
      name: 'Nursing Care',
      href: 'https://www.figma.com/file/2WehTq9blHxCYgEND2Q9Q3/Nursing-Care?type=design&node-id=0%3A1&mode=dev&t=bcTgdN0lw3PEx7qE-1',
      image: '6.png',
      category: 'Design'
    },
    {
      name: 'Nike Shop',
      href: 'https://e-commerce-vite.web.app/shoes',
      image: '7.png',
      category: 'Web'
    },
  ];

const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
  
    const filteredWork = selectedCategory === 'All' ? work : work.filter(item => item.category === selectedCategory);
  
    return (
      <div className='h-fit p-5 my-5 lg:pt-20'>
        <div className='max-w-[1000px] m-auto'>
          <div className='flex justify-center'>
          <h1 className="py-1 text-3xl font-semibold text-transparent bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FF8A56] bg-clip-text inline-block justify-center">Work</h1>
          </div>
          <div className='flex justify-center gap-5 py-5'>
            <button onClick={() => handleCategoryClick('All')} className={selectedCategory === 'All' ? 'bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FF8A56] text-white w-[120px] py-2 rounded-lg' : 'w-[120px] py-2 rounded-lg border border-black'}>All</button>
            <button onClick={() => handleCategoryClick('Web')} className={selectedCategory === 'Web' ? 'bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FF8A56] text-white w-[120px] py-2 rounded-lg' : 'w-[120px] py-2 rounded-lg border border-black'}>Web</button>
            <button onClick={() => handleCategoryClick('Design')} className={selectedCategory === 'Design' ? 'bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FF8A56] text-white w-[120px] py-2 rounded-lg' : 'w-[120px] py-2 rounded-lg border border-black'}>Design</button>
            {/* Add more buttons for other categories as needed */}
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 m-auto '>
            {filteredWork.map((item, index) => (
              <div key={index} className='rounded-2xl p-5 bg-[#1C1C22]'>
                <img src={item.image} alt={item.name} className='object-cover rounded-2xl' />
                <div className='rounded-b-2xl pt-5'>
                  <p>{item.name}</p>
                  <div className='flex gap-3 items-center'>
                    <p>Demo</p>
                    <a to={item.href} target="_blank" rel="noopener noreferrer">
                      <IoIosArrowRoundForward className='text-xl' />
                    </a>
                  </div>
                </div>
  
              </div>
            ))}
          </div>
        </div>
      </div>
  
    );
}

export default Work