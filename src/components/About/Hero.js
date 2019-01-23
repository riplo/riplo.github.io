import React from 'react'

import img from '../../images/hills.jpg'
import Banner from '../Banner'
import { Container } from '../Grid'

export default () => (
  <Banner id="hero" style={{ backgroundImage: `url(${img})` }}>
    <Container>
      <h1 className="serif center bold">
        We instantiate technical dreams
      </h1>
      <p className="center">
        Through Riplo we collectively work to solve interesting problems across markets, disciplines, and locations.
      </p>
    </Container>
  </Banner>
)
