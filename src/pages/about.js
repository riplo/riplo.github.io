import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/About'

const IndexPage = () => (
  <Layout>
    <SEO
      title="About Us"
      keywords={[
        'riplo',
        'about',
        'cameron',
        'cabo',
        'adam',
        'ripley',
        'dev',
        'learn',
        'school',
      ]}
      description="Learn more about Riplo: an experienced, student-run web and mobile development studio"
    />

    <About />
  </Layout>
)

export default IndexPage
