import React from 'react'

import booki from '../images/booki.jpg'

const Test = () => {
  return (
    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
      <div className='basis-1/3 flex-1'>
        <img
          src={booki}
          className='rounded-lg object-cover'
          width={'100%'}
          height={'100%'}
          layout='responsive'
          alt='project'
        />
      </div>
    </div>
  )
}

export default Test
