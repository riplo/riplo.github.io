import React from 'react'

import Project from './Project'
import projects from './projects'

export default () => (
  <section id="projects">
    <div className="container">
      <h2 className="serif bold marg-bot-1">
        Check out our past work
      </h2>

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
