import React from 'react'
import s from 'styled-components'

import img from '../../images/computer.jpg'
import Banner from '../Banner'
import { Container } from '../Grid'
import { maxWidth, PHONE, TABLET } from '../../constants/widths'

const StyledContainer = s(Container)`
  ${maxWidth(TABLET)} {
    padding-bottom: 1rem;
  }

  ${maxWidth(PHONE)} {
    padding-bottom: 1.5rem;
  }
`

export default () => (
  <Banner id="hero" style={{ backgroundImage: `url(${img})` }}>
    <StyledContainer>
      <h1 className="serif center bold">
        We are a driven group of student developers
      </h1>
      <p className="center">
        We rapidly build websites and mobile apps with modern technologies and
        industry-trained best practices.
        <br />
        Want something built? We'd love to help.
      </p>
    </StyledContainer>
  </Banner>
)
