import React from 'react'
import s from 'styled-components'

import { minWidth, PHONE } from '../../constants/widths'
import { BLACK } from '../../constants/colors'

const Wrapper = s.div`
  width: 16px;
  padding-top: 10px;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 0.5rem;

  &:hover {
    opacity: 0.5;
  }

  ${minWidth(PHONE)} {
    display: none;
  }
`

const Bar = s.span`
  width: 16px;
  height: 2px;
  margin-bottom: 3px;
  display: block;
  background: ${BLACK};
`

export default ({ handleClick }) => (
  <Wrapper onClick={handleClick}>
    <Bar />
    <Bar />
    <Bar />
  </Wrapper>
)
