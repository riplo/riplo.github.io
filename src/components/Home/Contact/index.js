import React, { Component } from 'react'
import s from 'styled-components'
import fetch from 'unfetch'

import { GRAY, WHITE } from '../../../constants/colors'
import RiploBar from '../../RiploBar'
import RiploLines from '../../RiploLines'
import { Textarea, Input, SubmitBtn } from '../../Forms'
import { ErrorMessage, SuccessMessage } from '../../Message'
import { Container } from '../../Grid'

const FORMSPREE_URL = 'https://formspree.io/cameroncabo@gmail.com'

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

const isValidEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line

  return re.test(String(email).toLowerCase())
}

// TODO formspree functionality
// TODO alert and alert styling
// TODO RENDER ERROR

class Contact extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      body: '',
      error: '',
      pending: false,
      success: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.isDisabled = this.isDisabled.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const { target } = event
    const { name, value } = target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    if (this.isDisabled()) {
      return
    }

    this.setState({ pending: true })

    const {
      firstName,
      lastName,
      email,
      subject,
      body,
    } = this.state

    const reqBody = {
      _subject: subject,
      firstName,
      lastName,
      email,
      subject,
      body,
    }

    fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody),
    })
      .then(r => r.json())
      .then(data => {
        this.setState({
          pending: false,
          success: true,
        })

        console.log(data)
      })
      .catch(error => {
        this.setState({
          error: error.message || 'Something went wrong. Check the form and try again.',
          pending: false,
        })
      })
  }

  isDisabled () {
    const {
      firstName,
      lastName,
      email,
      subject,
      body,
      pending,
    } = this.state

    if (pending) {
      return true
    }

    if (!firstName || !lastName || !email || !subject || !body) {
      return true
    }

    if (!isValidEmail(email)) {
      return true
    }

    if (firstName.length > 200) {
      this.setState({ error: 'First name is too long' })
      return true
    } else if (lastName.length > 200) {
      this.setState({ error: 'Last name is too long' })
      return true
    } else if (email.length > 300) {
      this.setState({ error: 'Email is too long' })
      return true
    } else if (subject.length > 500) {
      this.setState({ error: 'Subject is too long' })
      return true
    } else if (body.length > 10000) {
      this.setState({ error: 'Message is too long' })
      return true
    }

    return false
  }

  render () {
    const {
      firstName,
      lastName,
      email,
      subject,
      body,
      error,
      success,
      pending,
    } = this.state

    return (
      <Wrapper id="contact">
        <RiploLines right />

        <Container>
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <RiploBar red />

              <Content>
                <h2 className="serif bold marg-bot-1">Contact us</h2>

                <ErrorMessage message={error} />

                {success ? (
                  <SuccessMessage message="Your message was sent successfully. We will get back to you as soon as possible." />
                ) : (
                  <form id="contact-form" onSubmit={this.handleSubmit}>
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
                          value={firstName}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <Input
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Last"
                          required={true}
                          value={lastName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <Input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="example@gmail.com"
                      required={true}
                      value={email}
                      onChange={this.handleChange}
                    />

                    <Input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject..."
                      required={true}
                      value={subject}
                      onChange={this.handleChange}
                    />

                    <Textarea
                      type="text"
                      name="body"
                      className="form-control marg-bot-1"
                      rows="5"
                      placeholder="Message..."
                      required={true}
                      value={body}
                      onChange={this.handleChange}
                    />

                    <SubmitBtn
                      type="submit"
                      name="submit"
                      value={pending ? 'Sending...' : 'Send'}
                      className="btn btn-primary"
                      id="submit-button"
                      disabled={this.isDisabled()}
                    />
                  </form>
                )}
              </Content>
            </div>
          </div>
        </Container>

        <RiploLines left />
        <div className="space-1"></div>
      </Wrapper>
    )
  }
}

export default Contact
