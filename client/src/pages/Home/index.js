import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'

function Home() {
  return (
    <div>
      <Header/>
      <div className='bg-primary px-40 py-10 sm:px-5 py-5'>
      <Intro/>
      <About/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
      <LeftSider/>
      </div>
    </div>
  )
}

export default Home