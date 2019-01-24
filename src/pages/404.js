import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from '../components/Grid'
import { Title } from '../components/Typography'
import { BtnLink } from '../components/Btn'

const StyledContainer = s(Container)`
  padding-top: 1rem !important;
  padding-bottom: 1.5rem !important;
  min-height: calc(100vh - 120px) !important;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not Found" />
    <StyledContainer>
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <Title>404 page not found!</Title>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <BtnLink>
            Back to home
          </BtnLink>
        </div>
      </div>
    </StyledContainer>
  </Layout>
)

export default NotFoundPage
