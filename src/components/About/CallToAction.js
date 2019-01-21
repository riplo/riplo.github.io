import React from 'react'
import s from 'styled-components'

import { LIGHT_GRAY } from '../../constants/colors'
import { Title } from '../Typography'
import Arrow from '../Arrow'

const Wrapper = s.div`
  background: ${LIGHT_GRAY};
  padding: 1rem;
  margin-bottom: 1.5rem;
  margin-right: -1rem;
  margin-left: -1rem;
`

export default () => (
  <div className="container">
    <Wrapper>
      <Title>Our mission</Title>

      <p>
        Riplo was established to build products that matter year-round. We crave working on things which make us tick--which we see as having true positive impact for real users. If this lines up with what you have in mind, please reach out!
      </p>

      <span className="btn btn-primary">
        TODO <Arrow />
      </span>
    </Wrapper>
  </div>
)
