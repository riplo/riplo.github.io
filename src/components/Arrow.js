import React from 'react'
import s from 'styled-components'

import arrow from '../images/arrow.svg'

const Img = s.img`
  height: 1rem;
  margin-left: 0.5rem;
  width: auto;
`

export default () => (
  <Img src={arrow} />
)
