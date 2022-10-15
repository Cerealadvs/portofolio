import React from 'react'

import web1 from '../images/web1.png'
import web2 from '../images/web2.png'
import web3 from '../images/web3.png'
import web4 from '../images/web4.png'
import web5 from '../images/web5.png'
import web6 from '../images/web6.png'

const Project = () => {
  return (
    <section>
      <div>
        <h3 className='text-3xl pt-16 font-burtons' id='Project'>
          Projects
        </h3>
        <p className='text-md leading-8 text-gray-800'>
          Since the beginning of my journey as a freelance designer ans develoer, I have done remote work for{' '}
          <span className='text-teal-500'> agencies </span>consulted for{' '}
          <span className='text-teal-500'> strategies </span> and collabored with talent people to creating
          digital landing for businedss and coonsumer use.
        </p>
        <p className='text-md py-2 leading-8 text-gray-800'>
          I offer from a wide range of services, inclluding programming and teatching.
        </p>
      </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <div className='basis-1/3 flex-1'>
          <img
            src={web1}
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt='project'
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <img
            src={web2}
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt='project'
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <img
            src={web3}
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt='project'
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <img
            src={web4}
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt='project'
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <img
            src={web5}
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt='project'
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <img
            src={web6}
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt='project'
          />
        </div>
      </div>
    </section>
  )
}

export default Project
