import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Home from '../components/Home'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Student-Run Web & Mobile Development Studio"
      description="We rapidly build websites and mobile apps with modern technologies and industry-trained best practices. Want something built? We'd love to help."
      keywords={[
        'riplo',
        'upenn',
        'penn',
        'web',
        'mobile',
        'react',
        'cameron',
        'cabo',
        'adam',
        'ripley',
        'js',
        'javascript',
        'contract',
        'freelance',
        'dev',
        'developer',
      ]}
    />

    <Home />
  </Layout>
)

export default IndexPage
