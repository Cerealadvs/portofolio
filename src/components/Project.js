import React from 'react'

import booki from '../images/booki.jpg'
import ohmyfood from '../images/ohmyfood.jpg'
import lapanthere from '../images/lapanthere.jpg'
import kanap from '../images/kanap.jpg'
import hottakes from '../images/hottakes.jpg'
import groupomania from '../images/groupomania.jpg'

import html from '../images/html.svg'
import css from '../images/css.svg'
import sass from '../images/sass.svg'
import seo from '../images/seo.svg'
import js from '../images/js.svg'
import api from '../images/api.svg'
import angular from '../images/angular.svg'
import mongo from '../images/mongo.svg'
import react from '../images/react.svg'
import node from '../images/node.svg'

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

      <div className='flex flex-col-reverse gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <div className='basis-1/3 flex-1'>
          <img
            src={booki}
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt='booki'
          />
          <div className=' flex justify-between w-8 py-4 gap-1'>
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

        <div className='basis-1/3 flex-1'>
          <img
            src={ohmyfood}
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt='ohmyfood'
          />
          <div className=' flex justify-between w-8 py-4 gap-1'>
            <img src={html} alt='html'></img>
            <img src={css} alt='html'></img>
            <img src={sass} alt='html'></img>

            {/* <a href='/github'>
            <button
              type='button'
              className='px-6 py-1 text-white rounded shadow-md bg-gradient-to-r from-blue-500 to-teal-500'>
              GITHUB
            </button>
          </a> */}
          </div>
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
          <div className=' flex justify-between w-8 py-4 gap-1'>
            <img src={html} alt='html'></img>
            <img src={css} alt='html'></img>
            <img src={sass} alt='html'></img>
            <img src={seo} alt='html'></img>

            {/* <a href='/github'>
            <button
              type='button'
              className='px-6 py-1 text-white rounded shadow-md bg-gradient-to-r from-blue-500 to-teal-500'>
              GITHUB
            </button>
          </a> */}
          </div>
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
          <div className=' flex justify-between w-8 py-4 gap-1'>
            <img src={html} alt='html'></img>
            <img src={css} alt='html'></img>
            <img src={js} alt='html'></img>
            <img src={api} alt='html'></img>

            {/* <a href='/github'>
            <button
              type='button'
              className='px-6 py-1 text-white rounded shadow-md bg-gradient-to-r from-blue-500 to-teal-500'>
              GITHUB
            </button>
          </a> */}
          </div>
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
          <div className=' flex justify-between w-8 py-4 gap-1'>
            <img src={html} alt='html'></img>
            <img src={css} alt='html'></img>
            <img src={js} alt='html'></img>
            <img src={api} alt='html'></img>
            <img src={angular} alt='html'></img>
            <img src={node} alt='html'></img>
            <img src={mongo} alt='html'></img>

            {/* <a href='/github'>
            <button
              type='button'
              className='px-6 py-1 text-white rounded shadow-md bg-gradient-to-r from-blue-500 to-teal-500'>
              GITHUB
            </button>
          </a> */}
          </div>
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
          <div className=' flex justify-between w-8 py-4 gap-1'>
            <img src={html} alt='html'></img>
            <img src={css} alt='html'></img>
            <img src={js} alt='html'></img>
            <img src={api} alt='html'></img>
            <img src={react} alt='html'></img>
            <img src={node} alt='html'></img>
            <img src={mongo} alt='html'></img>

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
    </section>
  )
}

export default Project
