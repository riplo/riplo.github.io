import React from 'react'

import { Title } from '../../Typography'
import { Container } from '../../Grid'
import Project from './Project'
import projects from './projects'

export default () => (
  <section id="projects">
    <Container>
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
    </Container>
  </section>
)
