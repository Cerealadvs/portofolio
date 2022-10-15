import React from 'react'
import Navbar from '../components/Navbar'

import Presentaion from '../components/Presentaion'
import Project from '../components/Project'
import Services from '../components/Services'

const Home = () => {
  return (
    <main className=' bg-slate-300 px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
      <Navbar />
      <Presentaion />
      <Services />
      <Project />
    </main>
  )
}

export default Home
