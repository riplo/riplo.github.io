import React from 'react'

import { Title } from '../../Typography'
import Project from './Project'
import projects from './projects'

export default () => (
  <section id="projects">
    <div className="container">
      <Title>Check out our past work</Title>

      {projects.map(({
        title,
        technologies,
        description,
        image,
        link,
      }) => (
        <Project
          key={title}
          title={title}
          technologies={technologies}
          description={description}
          image={image}
          link={link}
        />
      ))}

      {/* TODO projects */}
    </div>
  </section>
)
