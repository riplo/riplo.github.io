import React from 'react'

import Hero from './Hero'
import People from './People'
import About from './About'
import Technologies from './Technologies'
import Projects from './Projects'
import CallToAction from './CallToAction'
import Contact from './Contact'
import RiploBar from '../RiploBar'

export default () => (
  <>
    <Hero />
    <People />
    <About />

    <RiploBar blue />

    <Technologies />

    <RiploBar red />

    <Projects />
    <CallToAction />
    <Contact />
  </>
)

// TODO contact
