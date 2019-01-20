import PropTypes from 'prop-types'
import React from 'react'
import s from 'styled-components'

import { WHITE, BORDER, BLACK } from '../../constants/colors'
import { maxWidth, PHONE } from '../../constants/widths'
import Logo from './Logo'

const HEIGHT = '55px'

const Nav = s.nav`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${BORDER};
  position: fixed;
  z-index: 1000;
  width: 100%;
  background: ${WHITE};

  ${maxWidth(PHONE)} {
    position: relative;
  }
`

const Container = s.div`
  display: flex;
  flex-direction: row;
`

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
    display: none;
  }
`

const NavSpace = s.div`
  height: ${HEIGHT};
  width: 100%;
  display: block;

  ${maxWidth(PHONE)} {
    display: none;
  }
`

//  TODO USER LINKS AND GATSBY IMAGE

const Header = () => (
  <>
    <Nav>
      <Container className="container">
        <Logo />

        <Links>
          <a href="#nav-space">
            Home
          </a>
          <a href="#about">
            About
          </a>
          <a href="#projects">
            Projects
          </a>
          <a href="#call-to-action">
            Contact
          </a>
        </Links>
      </Container>
    </Nav>

    <NavSpace />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
