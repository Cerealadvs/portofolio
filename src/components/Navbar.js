import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-4 mb-12 flex justify-between items-center bg-slate-300 dark:bg-gray-800 sticky top-0'>
      <h1 className='text-xl font-burtons text-slate-800 dark:text-slate-400'>developedbycd</h1>
      <ul className='hidden md:flex space-x-6 justify-center items-center'>
        {/* TODO: créer un a vers une page de présentation plus détaillée. */}
        <li className='font-burtons text-slate-800 dark:text-slate-400 hover:underline decoration-4 decoration-sky-500'>
          About me
        </li>
        <li>
          <a
            href='#Project'
            className='font-burtons text-slate-800 dark:text-slate-400 hover:underline decoration-4 decoration-green-500'>
            Projects
          </a>
        </li>
        <li>
          <a
            href='https://github.com/Cerealadvs'
            className='hidden md:flex font-burtons text-slate-800 dark:text-slate-400 justify-center items-center hover:underline decoration-4 decoration-yellow-500'>
            GitHub
            <svg
              class='h-5 w-5 text-black dark:text-slate-400'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              stroke-width='2'
              stroke='currentColor'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'>
              {' '}
              <path stroke='none' d='M0 0h24v24H0z' />{' '}
              <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />{' '}
              <path d='M7 12h14l-3 -3m0 6l3 -3' />
            </svg>
          </a>
        </li>
      </ul>
      <div class='md:hidden'>
        <div class='space-y-2'>
          <span class='block w-8 h-0.5 bg-slate-800'></span>
          <span class='block w-8 h-0.5 bg-slate-800'></span>
          <span class='block w-8 h-0.5 bg-slate-800'></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
