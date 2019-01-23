import React from 'react'
import { Link } from 'gatsby'
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from '../components/Grid'
import { Title } from '../components/Typography'

const StyledContainer = s(Container)`
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  min-height: calc(100vh - 120px);
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not Found" />
    <StyledContainer>
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <Title>404 page not found!</Title>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    </StyledContainer>
  </Layout>
)

export default NotFoundPage
