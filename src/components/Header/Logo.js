import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'

const Wrapper = s.div`
  width: 90px;
  display: block;
`

export default () => (
  <Link to="/">
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
  </Link>
)
