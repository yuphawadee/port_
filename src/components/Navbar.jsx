import React, { useState } from 'react';
import { TbMenuDeep } from "react-icons/tb";
import { HiMiniXMark } from "react-icons/hi2";
import { Dialog } from '@headlessui/react';
// import { Link, a } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '#hero-section' },
    { name: 'About', href: '#about-section' },
    { name: 'Work', href: '#work-section' },
];

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <div className='bg-black m-auto fixed top-0 w-full p-5 z-10'>
            <div className='max-w-[1000px] m-auto flex justify-between items-center'>
                <div className='text-xl font-semibold'>PIALK</div>
                <div className='hidden lg:flex items-center gap-8'>
                    {navigation.map((item, index) => {
                        return (
                            <a
                                key={index}
                                href={item.href}
                            // className={`${pathname === item.href ? 'font-semibold ' : ''}`}
                            >
                                {item.name}
                            </a>
                        )
                    })}
                    {/* <a href='/' >
                        <button className='w-[120px] py-2 rounded-lg bg-[#1C1C22]'>Resume</button>
                    </a> */}
                </div>
                <div className='lg:hidden absolute top-4 right-2 w-12 h-12 rounded-full hover:bg-[#1C1C22] flex justify-center items-center cursor-pointer' onClick={() => setMobileMenu(true)}>
                <TbMenuDeep className="text-2xl" />
                        </div>
                {/* <div className="lg:hidden flex rounded-full justify-center items-center hover:bg-[#1C1C22] cursor-pointer" onClick={() => setMobileMenu(true)}>
                        <TbMenuDeep className="text-2xl" />
                    </div> */}
            </div>

            <Dialog as="div" className="lg:hidden" open={mobileMenu} onClose={setMobileMenu} >
                <div className="fixed inset-0 z-50 backdrop-blur-sm bg-[#0f0f0f] bg-opacity-25" />
                <Dialog.Panel className="fixed bg-[#0f0f0f]  inset-y-0 right-0 z-50 w-[350px] overflow-y-auto px-5 py-4">
                    <div className="flex items-center justify-end">
                        <span className="sr-only">Close menu</span>
                        <div className='w-12 h-12 rounded-full hover:bg-[#1C1C22] flex justify-center items-center cursor-pointer'
                            onClick={() => setMobileMenu(false)}>
                            <HiMiniXMark className="text-[30px]" />
                        </div>
                    </div>
                    <div className="p-5">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="-mx-3 block  rounded-lg px-3 py-3 text-base leading-7  hover:bg-[#1C1C22] outline-none"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    );
};

export default Navbar;
