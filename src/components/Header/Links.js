import React from 'react'
import s from 'styled-components'

import { maxWidth, PHONE } from '../../constants/widths'
import { BLACK } from '../../constants/colors'

// TODO links on mobile

const Links = s.div`
  flex: 1;
  text-align: right;

  a {
    height: 2rem;
    line-height: 2rem;
    margin-left: 1rem;
    color: ${BLACK};
    opacity: 0.5;
    text-decoration: none;
    cursor: pointer;

    &:visited {
      color: ${BLACK};
    }

    &:hover,
    &:active {
      color: ${BLACK};
      opacity: 0.75;
      text-decoration: none;
    }
  }

  ${maxWidth(PHONE)} {
    flex: none;
    text-align: left;
    display: block;
    overflow: hidden;
    transition: max-height 0.5s;

    ${({ active }) => active ? `
      max-height: 100vh;
    ` : `
      max-height: 0;
    `}

    a {
      display: block;
      margin: 0.5rem 0;
      font-size: 1.2rem;
    }
  }
`

const Spacer = s.div`
  display: none;

  ${maxWidth(PHONE)} {
    display: block;
    width: 100%;
    height: 0.5rem;
  }
`

export default ({ toggleContactModal, active }) => (
  <Links active={active}>
    <Spacer />
    <a href="/">
      Home
    </a>
    <a href="/about">
      About
    </a>
    <a onClick={toggleContactModal}>
      Contact
    </a>
  </Links>
)
