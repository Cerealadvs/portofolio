import React from 'react'

import deved from '../images/dev-ed-wave.png'

const Presentation = () => {
  return (
    <section className='min-h-screen'>
      <div className='text-center p-10 py-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Cyril Delteil</h2>
        <h3 className='text-2xl py-2 md:text-3xl text-slate-800 dark:text-slate-400'>
          Developper Javascript
        </h3>
        <p className='text-md py-5 leading-8 text-slate-800 dark:text-slate-500 md:text-xl max-w-xl mx-auto'>
          Actuellement à la recherche d'une expérience professionnelle dans le développement web.
        </p>
        <h4 className='text-2xl py-2 md:text-3xl text-slate-800 dark:text-slate-400'>Explorateur du web</h4>
        <p className='text-md py-5 leading-8 text-slate-800 dark:text-slate-500 md:text-xl max-w-xl mx-auto'>
          Très curieux, je suis toujours à la recherche de nouvelles connaissances.
        </p>
      </div>

      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
        <img src={deved} layout='fill' objectfit='cover' alt='bonjour' />
      </div>
    </section>
  )
}

export default Presentation
