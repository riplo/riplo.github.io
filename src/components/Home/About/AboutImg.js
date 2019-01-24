import React from 'react'
import s from 'styled-components'

import riploConstruct from '../../../images/riplo-construct.svg'
import { maxWidth, PHONE } from '../../../constants/widths'

const Img = s.img`
  width: 100%;
  display: block;

  ${maxWidth(PHONE)} {
    margin-top: 0.5rem;
  }
`

export default () => (
  <Img
    src={riploConstruct}
    alt="Riplo construct render"
  />
)
