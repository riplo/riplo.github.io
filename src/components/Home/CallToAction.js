import React from 'react'

import Banner from '../Banner'
import img from '../../images/philly.jpg'

export default () => (
  <Banner id="call-to-action" style={{ backgroundImage: `url(${img})` }}>
    <div className="container">
      <h1 className="serif center bold">Let's get started</h1>
      <p className="center">
        Through our work we hope to make a positive impact on people and small
        business through well-crafted technology solutions.
      </p>
      <div className="space-1"></div>
    </div>
  </Banner>
)
