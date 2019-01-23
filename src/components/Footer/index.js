import React from 'react'
import s from 'styled-components'

import { GRAY, DARK_GRAY } from '../../constants/colors'
import { PHONE, maxWidth } from '../../constants/widths'
import { Container } from '../Grid'
import Logo from './Logo'

const HEIGHT = '1.5rem'

const Footer = s.footer`
  padding: 1rem 0rem;
  border-top: 1px solid ${GRAY};
  color: ${DARK_GRAY};
  font-size: 0.8rem;
`

const Legal = s.p`
  margin-bottom: 0;
  height: ${HEIGHT};
  line-height: ${HEIGHT};
  float: right;

  ${maxWidth(PHONE)} {
    float: none;
    height: auto;
    line-height: normal;
    margin-bottom: 0.5rem;
  }
`

const ToTop = s.a`
  cursor: pointer;
  display: none;

  ${maxWidth(PHONE)} {
    display: block;
    color: ${DARK_GRAY} !important;
  }
`

export default () => (
  <Footer>
    <Container>
      <Logo />

      <Legal>
        Riplo Ventures, LLC &copy; {new Date().getFullYear()}, all rights reserved.
      </Legal>

      <ToTop href="#nav-space">
        Back to top &uarr;
      </ToTop>
    </Container>
  </Footer>
)
