import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'

import { PHONE, maxWidth } from '../../constants/widths'

const Wrapper = s.div`
  width: 3.333333rem;
  display: inline-block;

  ${maxWidth(PHONE)} {
    margin-bottom: 1rem;
  }
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
