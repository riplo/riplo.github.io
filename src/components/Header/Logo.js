import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'

import logo from '../../images/riplo.svg'
import { BLACK } from '../../constants/colors'

const StyledLink = s(Link)`
  text-decoration: none !important;
  color: ${BLACK};
  font-weight: bold;
  display: flex;
`

const Img = s.img`
  height: 2rem;
  width: auto;
  display: block;
  margin-right: 0.55rem;
`

const LogoText = s.span`
  margin-top: 0.35rem;
  font-size: 1.2rem;
`

export default () => (
  <StyledLink to="/">
    <Img src={logo} alt="Riplo" />
    <LogoText>Riplo</LogoText>
  </StyledLink>
)
