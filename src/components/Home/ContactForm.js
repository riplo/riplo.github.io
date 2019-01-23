import React from 'react'
import s from 'styled-components'

import RiploBar from '../RiploBar'
import RiploLines from '../RiploLines'
import { Container } from '../Grid'
import { Title } from '../Typography'
import Contact from '../Contact'

import { GRAY, WHITE } from '../../constants/colors'

const Wrapper = s.div`
  margin-top: -5%;
  min-height: 540px;
`

const Content = s.div`
  position: relative;
  z-index: 1;
  border: 1px solid ${GRAY};
  background: ${WHITE};
  padding: 1rem calc(1rem + 1.25%);
  margin-bottom: 1rem;
`

export default () => (
  <Wrapper id="contact">
    <RiploLines right />

    <Container>
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <RiploBar red />

          <Content>
            <Title>Contact us</Title>

            <Contact />
          </Content>
        </div>
      </div>
    </Container>

    <RiploLines left />
    <div className="space-1"></div>
  </Wrapper>
)
