import React from 'react'

import Banner from '../Banner'
import { Container, Spacer } from '../Grid'
import { Statement, Text } from '../Typography'
import img from '../../images/philly.jpg'

export default () => (
  <Banner id="call-to-action" style={{ backgroundImage: `url(${img})` }}>
    <Container>
      <Statement>Let's get started</Statement>
      <Text center>
        Through our work we hope to make a positive impact on people and small
        business through well-crafted technology solutions.
      </Text>
      <Spacer />
    </Container>
  </Banner>
)
