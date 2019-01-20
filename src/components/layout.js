import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import './layout.css'
import { SERIF, SANS } from '../constants/fonts'
import { DARK_GRAY, BLUE, DARK_BLUE } from '../constants/colors'
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

  .btn {
    border-radius: 0rem;
  }

  .btn-primary {
    padding: 0.5rem 1rem;
    background: ${BLUE};

    &:hover,
    &:focus,
    &:active {
      background: ${DARK_BLUE};
    }

    ${maxWidth(PHONE)} {
      padding: 0.5rem 0.75rem;
    }
  }

  .space-1 {
    display: block;
    height: 1rem;
    width: 100%;
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

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} />

        {children}

        <Footer />
      </Wrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
