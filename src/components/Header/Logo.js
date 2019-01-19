import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Wrapper = s.div`
  width: 5rem;
  display: block;
`

export default () => (
  <Wrapper>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "riplo.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
  </Wrapper>
)
