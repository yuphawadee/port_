import React from 'react'

const About = () => {
  return (
    <div className='lg:h-screen max-w-[1000px] m-auto h-fit grid place-items-center py-20'>
      <div className='flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-3 lg:gap-20'>
        <div className='grow-1 w-96 flex items-center justify-center'>
          <img src="/pro.jpg" className='rounded-full lg:w-full w-60' alt="" />
        </div>
        <div className='grow-1 w-10/12'>
        <h1 className="pt-5 text-3xl  font-semibold text-transparent bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FF8A56] bg-clip-text inline-block">About Me</h1>
          <div>
            <h1 className="py-1 text-xl font-semibold text-transparent bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FF8A56] bg-clip-text inline-block">Education</h1>
            <div className='flex justify-between'>
              <span className='w-8/12'>Bachelor of Science Program in Information Technology Ubonratchathani University.</span>
              <span className=''>2019-2023</span>
            </div>
            {/* <div className='flex '> */}
            {/* <span className=''>Bachelor of Science Program in Information Technology</span> */}
            {/* </div> */}
            <hr className='border-b-1 border-[#4C4C4B] my-3' />
          </div>
          <div>
            <h1 className="py-1 text-xl font-semibold text-transparent bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FF8A56] bg-clip-text inline-block">Experience</h1>
            <div className='flex items-center justify-between'>
              <span>Internship at Addpay Service Point Co., Ltd.</span>
              <span>2023</span>
            </div>
            <hr className='border-b-1 border-[#4C4C4B] my-3' />
          </div>
          <div>
            <h1 className="py-1 text-xl font-semibold text-transparent bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FF8A56] bg-clip-text inline-block">Skills</h1>
            <div className='flex gap-3 w-8'>
              <img src='/html.png' alt="" className='object-contain' />
              <img src='/css.png' alt="" className='object-contain' />
              <img src='/js.png' alt="" className='object-contain' />
              <img src='/react.png' alt="" className='object-contain' />
              <img src='/next.png' alt="" className='object-contain' />
              <img src="/vite.svg" alt="" className='object-contain' />
              <img src='/figma.png' alt="" className='object-contain' />
              <img src='/tailwind.png' alt="" className='object-contain' />
              <img src='/bootstrap-1.png' alt="" className='object-contain' />
            </div>
            <hr className='border-b-1 border-[#4C4C4B] my-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About