import React from 'react'
import s from 'styled-components'

import AboutImg from './AboutImg'
import { Title } from '../../Typography'
import { SERIF } from '../../../constants/fonts'
import { GRAY, DARK_GRAY } from '../../../constants/colors'
import { maxWidth, PHONE, TABLET } from '../../../constants/widths'

const Num = s.div`
  font-size: 2rem;
  font-family: ${SERIF};
  font-weight: bold;
  margin-right: 1rem;
  padding-right: 1rem;
  color: ${DARK_GRAY};
  border-right: 2px dashed ${GRAY};
`

const Bullet = s.div`
  display: flex;
  flex-direction: row;

  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

const StyledTitle = s(Title)`
  ${maxWidth(TABLET)} {
    margin-top: 1.25rem;
  }

  ${maxWidth(PHONE)} {
    margin-top: 1.5rem;
  }
`

export default () => (
  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-9">
          <StyledTitle>More about us</StyledTitle>
          <Bullet>
            <Num>1.</Num>
            <p>
              Riplo is a student-run freelance web development company centered
              at the University of Pennsylvania. Our members come from top
              universities and specialize in full-stack development.
            </p>
          </Bullet>

          <Bullet>
            <Num>2.</Num>
            <p>
              Riplo delivers everything from complex web applications to mobile
              apps to static websites. Our developers work with a variety of
              clients at all stages of business-maturity.
            </p>
          </Bullet>

          <Bullet>
            <Num>3.</Num>
            <p>
              Our team is actively looking to bring on more clients. If you have
              an idea for an app or need help on an existing project, please get
              in touch.
            </p>
          </Bullet>
        </div>
        <div className="d-none d-md-block col-md-4 col-lg-3">
          <AboutImg />
        </div>
      </div>
    </div>
  </section>
)
