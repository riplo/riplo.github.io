import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'

import { Title } from '../Typography'
import { BLUE, RED } from '../../constants/colors'
import { maxWidth, PHONE } from '../../constants/widths'
import { Container } from '../Grid'

const FounderRow = s.div`
  margin-top: 2rem;

  img {
    padding: 0.5rem;
  }
`

const Wrapper = s.div`
  display: block;
  width: 100%;
  position: relative;

  ${maxWidth(PHONE)} {
    margin-bottom: 1rem;
  }
`

const Rect = s.div`
  position: absolute;
  width: 6rem;
  height: 6rem;
  display: block;
  opacity: 0.5;
  z-index: -1;
`

const BlueRect = s(Rect)`
  background: ${BLUE};
`

const RedRect = s(Rect)`
  background: ${RED};
  transform: translateY(-100%);
  right: 0;
`

const Founder = ({ image, name, children }) => (
  <FounderRow className="row">
    <div className="col-6 col-md-3 col-lg-2">
      <Wrapper>
        <BlueRect />
        <Img fluid={image} />
        <RedRect />
      </Wrapper>
    </div>

    <div className="col-12 col-md-9 col-lg-10">
      <h4>{name}</h4>
      {children}
    </div>
  </FounderRow>
)

export default () => (
  <section>
    <Container>
      <Title>Our founders</Title>

      <StaticQuery
        query={graphql`
          query {
            camImage: file(relativePath: { eq: "people/cam.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            },
            adamImage: file(relativePath: { eq: "people/adam.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Founder
              image={data.camImage.childImageSharp.fluid}
              name="Cameron Cabo"
            >
              <p>
                Cameron is a Junior at the University of Pennsylvania studying computer science and management of entrepreneurship in the M&T program. He's a teaching assistant for CIS 197: JavaScript, a product manager for CIS 350: Sofware Engineering, and a co-director of Penn's premiere software development club, Penn Labs.
              </p>
              <p>
                He has experience working at companies of all sizes and in different corners of tech, from Palantir to PayPal to Honey. At each company he's worked to curate more intuitive and feature rich interfaces and experiences.
              </p>
            </Founder>

            <Founder
              image={data.adamImage.childImageSharp.fluid}
              name="Adam Ripley"
            >
              <p>
                Adam completed his sophomore year at the Wharton School of the University of Pennsylvania before taking a year off to explore technology, the world, and philosophy. He's passionate for using technology to extend how people interact with and access the world around them.
              </p>
              <p>
                Adam has worked on a wide variety of technical and business ventures spanning physical health and wellness, e-commerce, photography, and blogging.
              </p>
            </Founder>
          </>
        )}
      />
    </Container>
  </section>
)
