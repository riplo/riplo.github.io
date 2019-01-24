import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

import Header from './Header'
import ContactModal from './ContactModal'
import Footer from './Footer'
import './layout.css'
import { SERIF, SANS } from '../constants/fonts'
import { DARK_GRAY } from '../constants/colors'
import { maxWidth, PHONE } from '../constants/widths'

const Wrapper = s.div`
  .serif {
    font-family: ${SERIF};
  }

  p,
  a,
  span,
  li,
  .btn,
  input,
  textarea {
    font-family: ${SANS};
  }

  .sans {
    font-family: ${SANS};
  }

  .center {
    text-align: center;
  }

  .bold {
    font-weight: bold;
  }

  ::placeholder {
    color: ${DARK_GRAY};
  }

  ::-webkit-input-placeholder {
    color: ${DARK_GRAY};
  }

  ::-moz-placeholder {
    color: ${DARK_GRAY};
  }

  :-ms-input-placeholder {
    color: ${DARK_GRAY};
  }

  :-moz-placeholder {
    color: ${DARK_GRAY};
  }

  .marg-bot-1 {
    margin-bottom: 1rem !important;
  }

  section {
    padding: calc(2.5% + 0.5rem) 0;
  }

  ${maxWidth(PHONE)} {
    section {
      padding: calc(2.5% + 1rem) 0;
    }
  }
`

class Layout extends Component {
  constructor (props) {
    super(props)

    this.state = { contactModalActive: false }
    this.toggleContactModal = this.toggleContactModal.bind(this)
  }

  toggleContactModal () {
    const { contactModalActive } = this.state
    this.setState({ contactModalActive: !contactModalActive })
  }

  render () {
    const { children } = this.props
    const { contactModalActive } = this.state

    return (
      <Wrapper>
        <Header toggleContactModal={this.toggleContactModal} />

        <ContactModal
          show={contactModalActive}
          toggle={this.toggleContactModal}
        />

        {children}

        <Footer />
      </Wrapper>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
