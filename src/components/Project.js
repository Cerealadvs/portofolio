import React from 'react'

import booki from '../images/booki.jpg'
import ohmyfood from '../images/ohmyfood.jpg'
import lapanthere from '../images/lapanthere.jpg'
import kanap from '../images/kanap.jpg'
import hottakes from '../images/hottakes.jpg'
import groupomania from '../images/groupomania.jpg'

// import css from '../images/css.svg'

// import node from '../images/node.svg'
// ;<img src={node} alt='node' />

const Project = () => {
  return (
    <section>
      <div>
        <h3 className='text-3xl pt-4 md:pt-24 font-burtons text-slate-800 dark:text-slate-400' id='Project'>
          Mes Projets
        </h3>
        <p className='text-md leading-8 text-slate-800 dark:text-slate-400'>
          Voici les différents projets que j'ai réalisés dans le cadre de ma formation chez{' '}
          <span className='text-teal-500'>
            {' '}
            <a href='https://openclassrooms.com/fr/'>OpenClassrooms</a>{' '}
          </span>{' '}
          . Vous pouvez consulter d'autres projets sur{' '}
          <span className='text-teal-500'>
            {' '}
            <a href='https://github.com/Cerealadvs'> Github</a>{' '}
          </span>{' '}
          et voir ceux sur lesquels je travaille en ce moment.
        </p>
        <p className='text-md py-2 leading-8 text-slate-800 dark:text-slate-400'>
          Que ce soit du front ou du back, je travaille principalement avec les technologies du web
          actuellement.
        </p>
      </div>

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

        <div className='basis-1/3 flex-1'>
          <img
            src={ohmyfood}
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt='project'
          />
        </div>

        <div className='basis-1/3 flex-1'>
          <img
            src={lapanthere}
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt='project'
          />
        </div>

        <div className='basis-1/3 flex-1'>
          <img
            src={kanap}
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt='project'
          />
        </div>

        <div className='basis-1/3 flex-1'>
          <img
            src={hottakes}
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt='project'
          />
        </div>

        <div className='basis-1/3 flex-1'>
          <img
            src={groupomania}
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
