import React from 'react'
import Navbar from '../components/Navbar'
import deved from '../images/dev-ed-wave.png'
import design from '../images/design.png'
import code from '../images/code.png'
import consulting from '../images/consulting.png'

import web1 from '../images/web1.png'
import web2 from '../images/web2.png'
import web3 from '../images/web3.png'
import web4 from '../images/web4.png'
import web5 from '../images/web5.png'
import web6 from '../images/web6.png'

const Home = () => {
  return (
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
      <section className='min-h-screen'>
        <Navbar />
        <div className='text-center p-10 py-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Cyril Delteil</h2>
          <h3 className='text-2xl py-2 md:text-3xl'>Developper Javascript WebExplorer.</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
            Freelancer providoing services for programming and custom needs. Join me down bellow ands
            cracking!
          </p>
        </div>

        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <img src={deved} layout='fill' objectFit='cover' alt='bonjour' />
        </div>
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-1'> Services I Offer</h3>
          <p className='text-md leading-8 text-gray-800'>
            Since the beginning of my journey as a freelance designer ans develoer, I have done remote work
            for <span className='text-teal-500'> agencies </span>consulted for{' '}
            <span className='text-teal-500'> strategies </span> and collabored with talent people to creating
            digital landing for businedss and coonsumer use.
          </p>
          <p className='text-md py-2 leading-8 text-gray-800'>
            I offer from a wide range of services, inclluding programming and teatching.
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
      <section>
        <div>
          <h3 className='text-3xl py-1'>Portofolio</h3>
          <p className='text-md leading-8 text-gray-800'>
            Since the beginning of my journey as a freelance designer ans develoer, I have done remote work
            for <span className='text-teal-500'> agencies </span>consulted for{' '}
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
    </main>
  )
}

export default Home
