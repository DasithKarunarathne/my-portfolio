import React from 'react'
import {About} from './components/About'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import {Experience} from './components/Experience'
import {Education} from './components/Education'
import {Achievements} from './components/Achievements'
import Contact from './components/Contact'
import {Footer} from './components/Footer'
import {Hero} from './components/Hero'
import {Testimonials} from './components/Testimonials'
import {Header} from './components/Header'

function App() {
  return (
    <div className="font-sans min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header/>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer/>
    </div>
  )
}

export default App
