import React from 'react'
import s from 'styled-components'

import { DARK_GRAY, LIGHT_GRAY } from '../../constants/colors'
import { PHONE, maxWidth } from '../../constants/widths'

const Wrapper = s.section`
  background: ${LIGHT_GRAY};

  ${maxWidth(PHONE)} {
    overflow: hidden;
  }
`

const Container = s.div`
  ${maxWidth(PHONE)} {
    z-index: 1;
    position: relative;
  }
`

const ListsWrapper = s.div`
  display: flex;

  ${maxWidth(PHONE)} {
    display: block;
  }
`

const ListWrapper = s.div`
  padding: 0.5rem 0;
  flex: 1;
  text-align: center;
  border-right: 2px dashed ${DARK_GRAY};

  &:last-child {
    border-right: 0 solid transparent;
  }

  ${maxWidth(PHONE)} {
    border-right: 0 solid transparent;
  }
`

const List = s.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

export default () => (
  <Wrapper id="technologies">
    <div className="lines right"></div>

    <Container className="container">
      <h2 className="serif bold center marg-bot-1">Technologies</h2>

      <ListsWrapper>
        <ListWrapper>
          <h5 className="bold">Web</h5>
          <List>
            <li>HTML/CSS/SCSS</li>
            <li>React/Redux</li>
            <li>Ruby on Rails</li>
          </List>
        </ListWrapper>

        <ListWrapper>
          <h5 className="bold">Mobile</h5>
          <List>
            <li>React Native</li>
            <li>Firebase</li>
            <li>Android/iOS</li>
          </List>
        </ListWrapper>

        <ListWrapper>
          <h5 className="bold">Everywhere</h5>
          <List>
            <li>JavaScript, Node, Express</li>
            <li>MongoDB, PostgreSQL</li>
            <li>Heroku, AWS</li>
          </List>
        </ListWrapper>
      </ListsWrapper>
    </Container>

    <div className="lines left"></div>
  </Wrapper>
)
