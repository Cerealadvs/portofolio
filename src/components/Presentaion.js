import React from 'react'

import deved from '../images/dev-ed-wave.png'

const Presentaion = () => {
  return (
    <section className='min-h-screen'>
      <div className='text-center p-10 py-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Cyril Delteil</h2>
        <h3 className='text-2xl py-2 md:text-3xl'>Developper Javascript WebExplorer.</h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
          Je suis actuellement à la recherche d'une expérience professionnelle dans le développement web.
        </p>
      </div>

      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
        <img src={deved} layout='fill' objectFit='cover' alt='bonjour' />
      </div>
    </section>
  )
}

export default Presentaion
