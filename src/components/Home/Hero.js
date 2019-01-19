import React from 'react'
import s from 'styled-components'

import { WHITE } from '../../constants/colors'
import { minWidth, TABLET } from '../../constants/widths'

const Banner = s.div`
  color: ${WHITE};
  padding: 5% 0rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  p {
    font-size: 1.5rem;
  }

  ${minWidth(TABLET)} {
    p {
      font-size: 1.25rem;
    }
  }
`

export default () => (
  <Banner id="hero">
    <div className="container">
      <h1 className="serif center bold">
        We are a driven group of student developers
      </h1>
      <p className="center">
        We rapidly build websites and mobile apps with modern technologies and industry-trained best practices.<br />
        Want something built? We'd love to help.
      </p>
    </div>
  </Banner>
)
