import React from 'react'
import s from 'styled-components'

const Alert = s.div`
  border-radius: 0px;
  border-width: 2px;
`

export default () => (
  <Alert className="TODO">This is an alert</Alert>
)
