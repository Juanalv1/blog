import React from 'react'
import { FiAlignJustify, FiSearch, IconName } from "react-icons/fi";

const Navbar = () => {

  return (
    <div className='flex justify-between px-4 py-3 w-full items-center lg:px-12 xl:px-36 xl:py-4 lg:text-xl'>
      <div className='lg:hidden'>
        <FiAlignJustify className='text-[#4B5563] h-6 w-6'/>
      </div>
        <div className='items-center flex gap-x-3'>
          <div className='round ed bg-[#4B5563]  px-3.5 py-1 text-lg'>
          E
          </div>
        <p className=''>Epictetus</p>
      </div>
      <div className='lg:hidden'>
        <FiSearch className='text-[#4B5563] h-6 w-6'/>
      </div>
      <ul className='hidden lg:flex gap-x-8'>
        <li>Ui Design</li>
        <li>Front-end</li>
        <li>Back-end</li>
      </ul>
      <div className='bg-gray-800 hidden lg:flex rounded-3xl px-3 py-2 items-center'>
        <FiSearch  className='w-4 h-4 text-gray-700'/>
        <input type='text' className='bg-transparent px-2 outline-none text-gray-300' placeholder='Search'/>
      </div>
    </div>
  )
}

export default Navbar
