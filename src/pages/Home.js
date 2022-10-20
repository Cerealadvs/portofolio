import React from 'react'
import Navbar from '../components/Navbar'

import Presentation from '../components/Presentation'
import Project from '../components/Project'
import Services from '../components/Services'

import Test from '../components/Test'
import UnderConstruction from '../components/UnderConstruction'

const Home = () => {
  return (
    <main className=' bg-slate-300 px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
      <UnderConstruction />
      <Navbar />
      <Presentation />
      <Services />
      <Project />
      <Test />
    </main>
  )
}

export default Home
