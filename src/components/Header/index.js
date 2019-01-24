import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

import { WHITE, BORDER } from '../../constants/colors'
import { maxWidth, PHONE } from '../../constants/widths'
import { Container } from '../Grid'
import Logo from './Logo'
import Bars from './Bars'
import Links from './Links'

const HEIGHT = '54px'

const Nav = s.nav`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${BORDER};
  position: fixed;
  z-index: 1000;
  width: 100%;
  background: ${WHITE};
  min-height: ${HEIGHT};
`

const StyledContainer = s(Container)`
  display: flex;
  flex-direction: row;

  ${maxWidth(PHONE)} {
    display: block;
  }
`

const NavSpace = s.div`
  height: ${HEIGHT};
  width: 100%;
  display: block;
`

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = { active: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    const { active } = this.state
    this.setState({ active: !active })
  }

  render () {
    const { toggleContactModal } = this.props
    const { active } = this.state

    return (
      <>
        <Nav>
          <StyledContainer>
            <Logo />

            <Bars handleClick={this.toggle} />

            <Links
              toggleContactModal={toggleContactModal}
              active={active}
            />
          </StyledContainer>
        </Nav>

        <NavSpace />
      </>
    )
  }
}

Header.propTypes = {
  toggleContactModal: PropTypes.func.isRequired,
}

export default Header
