import React from 'react'
import s from 'styled-components'

import RiploBar from '../RiploBar'
import RiploLines from '../RiploLines'
import { Spacer, Container, Row, Col } from '../Grid'
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
      <Row>
        <Col sm={12} md={8} offsetMd={2} lg={6} offsetLg={3}>
          <RiploBar red />

          <Content>
            <Title>Contact us</Title>

            <Contact />
          </Content>
        </Col>
      </Row>
    </Container>

    <RiploLines left />
    <Spacer />
  </Wrapper>
)
