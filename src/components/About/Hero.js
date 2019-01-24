import React from 'react'

import img from '../../images/hills.jpg'
import Banner from '../Banner'
import { Container } from '../Grid'
import { Statement, Text } from '../Typography'

export default () => (
  <Banner id="hero" style={{ backgroundImage: `url(${img})` }}>
    <Container>
      <Statement>
        We instantiate technical dreams
      </Statement>
      <Text center>
        Through Riplo we collectively work to solve interesting problems across markets, disciplines, and locations.
      </Text>
    </Container>
  </Banner>
)
