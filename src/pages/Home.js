import React from 'react'
import Navbar from '../components/Navbar'

import Portfolio from '../components/Portfolio'
import Presentaion from '../components/Presentaion'
import Services from '../components/Services'

const Home = () => {
  return (
    <main className=' bg-slate-300 px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
      <Navbar />
      <Presentaion />
      <Services />
      <Portfolio />
    </main>
  )
}

export default Home
