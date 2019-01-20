import React from 'react'
import s from 'styled-components'

import { GRAY, WHITE, BLUE } from '../../../constants/colors'
import RiploBar from '../../RiploBar'
import RiploLines from '../../RiploLines'

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

const styles = `
  margin-bottom: 1rem !important;
  border-radius: 0 !important;
  border-width: 2px !important;
  font-size: 1rem !important;
  padding: 0.75rem !important;

  &:active,
  &:focus {
    border-color: ${BLUE} !important;
  }
`

const Input = s.input`
  ${styles}
`

const Textarea = s.textarea`
  ${styles}
`

// TODO formspree functionality
// TODO alert and alert styling

export default () => (
  <Wrapper id="contact">
    <RiploLines right />

    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <RiploBar red />

          <Content>
            <h2 className="serif bold marg-bot-1">Contact us</h2>
            <form id="contact-form">
              <div id="contact-page-message"></div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    placeholder="First"
                    required={true}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <Input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last"
                    required={true}
                  />
                </div>
              </div>

              <Input
                type="email"
                name="email"
                className="form-control"
                placeholder="example@gmail.com"
                required={true}
              />

              <Input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject..."
                required={true}
              />

              <Textarea
                type="text"
                name="body"
                className="form-control marg-bot-1"
                rows="5"
                placeholder="Message..."
                required={true}
              />

              <input
                type="submit"
                name="submit"
                value="Send"
                className="btn btn-primary"
                id="submit-button"
              />
            </form>
          </Content>
        </div>
      </div>
    </div>

    <RiploLines left />
    <div className="space-1"></div>
  </Wrapper>
)
