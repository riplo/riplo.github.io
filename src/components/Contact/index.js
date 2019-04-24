import React, { Component } from 'react'
import fetch from 'unfetch'

import { Textarea, Input, SubmitBtn } from '../Forms'
import { Col, ColSpace, Row } from '../Grid'
import { ErrorMessage, SuccessMessage } from '../Message'

const FORMCARRY_URL = 'https://formcarry.com/s/IJYk1JlscCS'

const isValidEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line

  return re.test(String(email).toLowerCase())
}

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
    const { target: { name, value } = {} } = event

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
      body,
    } = this.state

    const reqBody = {
      name: firstName,
      surname: lastName,
      email,
      message: body,
    }

    fetch(FORMCARRY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
      .then(r => r.json())
      .then(data => {
        this.setState({
          pending: false,
          success: true,
        })
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
      <>
        <ErrorMessage message={error} />

        {success ? (
          <SuccessMessage message="Your message was sent successfully. We will get back to you as soon as possible." />
        ) : (
          <form id="contact-form" onSubmit={this.handleSubmit}>
            <div id="contact-page-message"></div>
            <Row>
              <Col>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First"
                  required={true}
                  value={firstName}
                  onChange={this.handleChange}
                />
              </Col>

              <ColSpace />

              <Col>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last"
                  required={true}
                  value={lastName}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>

            <Input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required={true}
              value={email}
              onChange={this.handleChange}
            />

            <Input
              type="text"
              name="subject"
              placeholder="Subject..."
              required={true}
              value={subject}
              onChange={this.handleChange}
            />

            <Textarea
              type="text"
              name="body"
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
              id="submit-button"
              disabled={this.isDisabled()}
            />
          </form>
        )}
      </>
    )
  }
}

export default Contact
