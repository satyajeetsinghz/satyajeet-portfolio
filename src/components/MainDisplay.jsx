import React from 'react'
import Header from './Header'
import Projects from './Projects'
import Skills from './Skills'
import WorkExperience from './WorkExperience'

const MainDisplay = () => {
  return (
    <div className='min-h-screen bg-white text-black host-grotesk-family p-2 sm:p-0 md:p-0 lg:p-0'>
      <Header />
      <Projects />
      <Skills />
      <WorkExperience />
    </div>
  )
}

export default MainDisplay
