import React from 'react'

import design from '../images/design.png'
import code from '../images/code.png'
import consulting from '../images/consulting.png'

const Services = () => {
  return (
    <section>
      <div>
        <h3 className='text-3xl py-1'> Services I Offer</h3>
        <p className='text-md leading-8 text-gray-800'>
          Since the beginning of my journey as a freelance designer ans develoer, I have done remote work for{' '}
          <span className='text-teal-500'> agencies </span>consulted for{' '}
          <span className='text-teal-500'> strategies </span> and collabored with talent people to creating
          digital landing for businedss and coonsumer use.
        </p>
        <p className='text-md py-2 leading-8 text-gray-800'>
          I offer from a wide range of services, including programming and teatching.
        </p>
      </div>
      <div className='lg:flex gap-10'>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <img src={design} width={100} height={100} alt='schema' />
          <h3 className='text-lg font-medium pt-8 pb-2 '>Beautifull Designs</h3>
          <p className='py-2'>Creating elegant designs suioted for your needs with design theory.</p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Illustrator</p>
          <p className='text-gray-800 py-1'>Figma</p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <img src={consulting} width={100} height={100} alt='schema' />
          <h3 className='text-lg font-medium pt-8 pb-2 '>Beautifull Designs</h3>
          <p className='py-2'>Creating elegant designs suioted for your needs with design theory.</p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Illustrator</p>
          <p className='text-gray-800 py-1'>Figma</p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <img src={code} width={100} height={100} alt='schema' />
          <h3 className='text-lg font-medium pt-8 pb-2 '>Beautifull Designs</h3>
          <p className='py-2'>Creating elegant designs suioted for your needs with design theory.</p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Illustrator</p>
          <p className='text-gray-800 py-1'>Figma</p>
        </div>
      </div>
    </section>
  )
}

export default Services
