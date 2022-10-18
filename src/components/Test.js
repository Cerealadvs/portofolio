import React from 'react'

import booki from '../images/booki.jpg'

import html from '../images/html.svg'
import css from '../images/css.svg'

const Test = () => {
  return (
    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
      <div className='basis-1/3 flex-1 rounded-lg hover:bg-gradient-to-r from-blue-500 to-teal-500'>
        <img
          src={booki}
          className='rounded-lg object-cover hover:opacity-0'
          width={'100%'}
          height={'100%'}
          layout='responsive'
          alt='booki'
        />
      </div>

      <div className='basis-1/3 flex-1 rounded-lg '>
        <img
          src={booki}
          className='rounded-lg object-cover'
          width={'100%'}
          height={'100%'}
          layout='responsive'
          alt='booki'
        />

        <div className=' flex justify-between w-8 py-4'>
          <img src={html} alt='html'></img>
          <img src={css} alt='html'></img>

          {/* <a href='/github'>
            <button
              type='button'
              className='px-6 py-1 text-white rounded shadow-md bg-gradient-to-r from-blue-500 to-teal-500'>
              GITHUB
            </button>
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default Test
