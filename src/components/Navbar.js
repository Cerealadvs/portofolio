import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className='flex items-center justify-between py-8 mb-12 top-0 md:sticky bg-slate-300 dark:bg-gray-800'>
      <h1 className='text-xl font-burtons text-slate-800 dark:text-slate-400'>developedbycd</h1>

      <nav>
        <section class='md:hidden'>
          <div class='space-y-2' onClick={() => setIsNavOpen((prev) => !prev)}>
            <span class='block w-8 h-0.5 bg-slate-800'></span>
            <span class='block w-8 h-0.5 bg-slate-800'></span>
            <span class='block w-8 h-0.5 bg-slate-800'></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div className='absolute top-0 right-0 px-8 py-8' onClick={() => setIsNavOpen(false)}>
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>

            <ul className='flex flex-col items-center justify-between min-h-[250px]'>
              <li className='font-burtons text-slate-800 dark:text-slate-400 hover:underline decoration-4 decoration-sky-500'>
                <a href='/about'>About me</a>
              </li>
              <li className='font-burtons text-slate-800 dark:text-slate-400 hover:underline decoration-4 decoration-green-500'>
                <a href='#Project'>Projects</a>
              </li>
              <li className='font-burtons text-slate-800 dark:text-slate-400 hover:underline decoration-4 decoration-yellow-500'>
                <a href='https://github.com/Cerealadvs' className='flex '>
                  GitHub
                  <svg
                    class='h-5 w-5 text-slate-800  dark:text-slate-400'
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
          </div>
        </section>

        <ul className='hidden space-x-8 md:flex'>
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
              className='hidden md:flex font-burtons text-slate-800 dark:text-slate-400 justify-center  hover:underline decoration-4 decoration-yellow-500'>
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
      </nav>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: RGBA(203, 213, 225, 1);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  )
}

export default Navbar
