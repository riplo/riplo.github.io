import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/About'

// TOOD SEO

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />

    <About />
  </Layout>
)

export default IndexPage
