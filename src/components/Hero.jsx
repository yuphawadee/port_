import React from 'react'

const Hero = () => {
  return (
    <div className='lg:h-screen h-fit grid place-items-center pt-20 py-10 lg:py-0'>
            <div className='flex flex-col justify-center items-center  gap-5'>
                <img src="/profile.jpg" className='w-60 rounded-full ' alt="" />
                <h1 className="pt-5 text-3xl  font-semibold text-transparent bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FF8A56] bg-clip-text">Hello, I'm Yuphawadee</h1>
                <div className='lg:w-6/12 w-10/12 text-center leading-7'>
                    <span>I have a goal to learn how to work in the real world and align my work with my academic studies. I also aim to apply the knowledge I have to contribute to organizations.</span>
                </div>
            </div>
        </div>
  )
}

export default Hero