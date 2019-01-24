import React from 'react'
import s from 'styled-components'

import { DARK_GRAY, LIGHT_GRAY } from '../../constants/colors'
import { PHONE, maxWidth } from '../../constants/widths'
import { Container } from '../Grid'
import { Title, Subtitle } from '../Typography'

const Wrapper = s.section`
  background: ${LIGHT_GRAY};

  ${maxWidth(PHONE)} {
    overflow: hidden;
  }
`

const StyledContainer = s(Container)`
  ${maxWidth(PHONE)} {
    z-index: 1;
    position: relative;
  }
`

const ListsWrapper = s.div`
  display: flex;

  h5 {
    margin-bottom: 1rem;
  }

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

  li {
    margin-bottom: 0.5rem;
  }
`

export default () => (
  <Wrapper id="technologies">
    <StyledContainer>
      <Title center>Technologies</Title>

      <ListsWrapper>
        <ListWrapper>
          <Subtitle>Web</Subtitle>
          <List>
            <li>HTML/CSS/SCSS</li>
            <li>React/Redux</li>
            <li>Ruby on Rails</li>
          </List>
        </ListWrapper>

        <ListWrapper>
          <Subtitle>Mobile</Subtitle>
          <List>
            <li>React Native</li>
            <li>Firebase</li>
            <li>Android/iOS</li>
          </List>
        </ListWrapper>

        <ListWrapper>
          <Subtitle>Everywhere</Subtitle>
          <List>
            <li>JavaScript, Node, Express</li>
            <li>MongoDB, PostgreSQL</li>
            <li>Heroku, AWS</li>
          </List>
        </ListWrapper>
      </ListsWrapper>
    </StyledContainer>
  </Wrapper>
)
