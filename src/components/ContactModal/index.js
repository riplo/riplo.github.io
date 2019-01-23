import React from 'react'
import PropTypes from 'prop-types'

import { Modal, ModalContainer } from '../Modal'
import { Title } from '../Typography'
import Contact from '../Contact'

const ContactModal = ({ show, toggle }) => (
  <Modal show={show} toggle={toggle}>
    <ModalContainer paddingTop="0.5rem">
      <Title>Contact us</Title>
      <p>Want some help? Have an idea? Fill this out and we'll see how we can meet your needs.</p>
      <Contact />
    </ModalContainer>
  </Modal>
)

ContactModal.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}

export default ContactModal
