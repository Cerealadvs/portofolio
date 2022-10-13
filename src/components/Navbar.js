import React from 'react'

import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='py-10 mb-12 flex justify-between '>
      <h1 className='text-xl font-burtons '>developedbycd</h1>
      <ul className='flex'>
        <li>
          <AiFillLinkedin className='text-4xl text-gray-600' href='#' />
        </li>
        <AiOutlineMail className='text-4xl text-gray-600 ' />
        <li></li>
        <li>
          <button
            className='bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8'
            href='#'>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
