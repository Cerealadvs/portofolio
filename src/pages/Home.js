import React from 'react'
import Navbar from '../components/Navbar'

import Presentation from '../components/Presentation'
import Project from '../components/Project'
import UnderConstruction from '../components/UnderConstruction'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'

// import Test from '../components/Test'

const Home = () => {
  return (
    <main className=' bg-slate-300 px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
      <UnderConstruction />
      <Navbar />
      <Presentation />
      <Project />
      <AboutMe />
      <Footer />
      {/* <Test /> */}
    </main>
  )
}

export default Home
