import React from 'react'

import html from '../images/html.svg'
import css from '../images/css.svg'
import sass from '../images/sass.svg'
import express from '../images/express.svg'
import js from '../images/js.svg'
import mongo from '../images/mongo.svg'
import react from '../images/react.svg'
import tailwind from '../images/tailwind.svg'
import node from '../images/node.svg'

import api from '../images/api.svg'
import seo from '../images/seo.svg'

import vite from '../images/vite.svg'
import next from '../images/next.svg'
import svelte from '../images/svelte.svg'
import typescript from '../images/typescript.svg'

const AboutMe = () => {
  return (
    <section>
      <div>
        <h3 className='text-3xl pt-4 md:pt-24 font-burtons text-slate-800 dark:text-slate-400' id='AboutMe'>
          A propos
        </h3>
        <p className='text-md leading-8 text-gray-800 dark:text-slate-400'>
          Mes amis me décrivent comme un <span className='text-teal-500'>couteau suisse </span> ; je m'adapte
          à toutes les situations. Ce trait de personnalité m'a toujours permis de travailler dans les
          domaines qui m’intéressaient. Très curieux, j'aime explorer de nouveaux domaines de connaissances et
          c'est tout naturellement que je suis arrivé dans l'informatique. Actuellement en reconversion dans
          le <span className='text-teal-500'>web</span>, je cherche une première
          <span className='text-teal-500'> expérience</span> dans le développement.
        </p>
      </div>

      <p className='text-md pt-10 leading-8 text-gray-800 font-burtons dark:text-slate-400 '>
        Les technologies avec lesquelles j'ai travaillé:
      </p>

      <div className='lg:flex gap-10 shadow-lg p-10 rounded-xl my-2 dark: shadow-slate-600'>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-2 place-items-center'>
          <div>
            <img src={mongo} width={100} height={100} alt='mongo' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              mongo.db
            </p>
          </div>

          <div>
            <img src={express} width={100} height={100} alt='express' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              express
            </p>
          </div>
          <div>
            <img src={react} width={100} height={100} alt='react' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              react
            </p>
          </div>
          <div>
            <img src={node} width={100} height={100} alt='node' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              node.js
            </p>
          </div>
          <div>
            <img src={tailwind} width={100} height={100} alt='tailwind' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              tailwind
            </p>
          </div>
          <div>
            <img src={html} width={100} height={100} alt='html' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              html
            </p>
          </div>
          <div>
            <img src={css} width={100} height={100} alt='css' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              css
            </p>
          </div>
          <div>
            <img src={sass} width={100} height={100} alt='sass' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              sass
            </p>
          </div>
          <div>
            <img src={js} width={100} height={100} alt='js' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              javascript
            </p>
          </div>
          <div>
            <img src={api} width={100} height={100} alt='api' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              api rest
            </p>
          </div>
          <div>
            <img src={seo} width={100} height={100} alt='seo' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              référencement
            </p>
          </div>
        </div>
      </div>

      <p className='text-md pt-10 leading-8 text-gray-800 font-burtons dark:text-slate-400 '>
        Et celles sur lesquelles je me renseigne:
      </p>

      <div className='lg:flex gap-10 shadow-lg p-10 rounded-xl my-2 dark: shadow-slate-600'>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-2 place-items-center'>
          <div>
            <img src={vite} width={100} height={100} alt='vite' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              vite
            </p>
          </div>

          <div>
            <img src={next} width={100} height={100} alt='next' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              next
            </p>
          </div>
          <div>
            <img src={svelte} width={100} height={100} alt='svelte' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              svelte
            </p>
          </div>
          <div>
            <img src={typescript} width={100} height={100} alt='typescript' />
            <p className=' text-center text-md py-2 leading-8 text-gray-800 font-burtons dark:text-slate-400'>
              typescript
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
