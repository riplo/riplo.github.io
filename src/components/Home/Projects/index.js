import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Title } from '../../Typography'
import { Container } from '../../Grid'
import Project from './Project'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile (filter: {
          name: { eq : "projects" }
          sourceInstanceName: { eq : "data" }
        }) {
          edges {
            node {
              childrenProjectsJson {
                title
                technologies
                description
                image {
                  src {
                    childImageSharp {
                      fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                        src
                      }
                    }
                  }
                }
                link
              }
            }
          }
        }
      }
    `}
    render={data => {
      const projects = data.allFile.edges[0].node.childrenProjectsJson

      return (
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
          </Container>
        </section>
      )
    }}
  />
)
