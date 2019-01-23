import React from 'react'
import s from 'styled-components'

import { LIGHT_GRAY, SHADE, WHITE, BORDER } from '../../../constants/colors'
import { maxWidth, PHONE } from '../../../constants/widths'
import { Header } from '../../Typography'

// TODO use gatsby image here

const Wrapper = s.div`
  background: ${LIGHT_GRAY};
  padding: 1rem calc(1rem + 1.25%) 0rem calc(1rem + 1.25%);
  margin-bottom: calc(1rem + 1.25%);
  overflow: hidden;

  .btn {
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${maxWidth(PHONE)} {
    padding: 1rem 0;
    border-top: 2px solid ${BORDER};
    background: ${WHITE};
    overflow: visible;
  }
`

const ImgWrapper = s.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;

  img {
    border-right: 1px solid ${SHADE};
    border-left: 1px solid ${SHADE};
    border-top: 1px solid ${SHADE};
    box-shadow: 0rem -0.125rem 0.75rem rgba(0, 0, 0, 0.15);

    ${maxWidth(PHONE)} {
      border: 1px solid ${SHADE};
      box-shadow: 0rem 2px 16px rgba(0, 0, 0, 0.15);
    }
  }
`

const Project = ({
  title,
  technologies,
  description,
  image,
  link,
}) => {
  const img = require(`../../../images/projects/${image}`)

  return (
    <Wrapper>
      <div className="row">
        <div className="col-12 col-lg-6">
          <Header>
            {title}
          </Header>

          <p>
            {description}
          </p>

          <p>
            <strong>Technologies:&nbsp;</strong>
            {technologies}
          </p>

          {link && (
            <a href={link} className="btn btn-primary" target="_BLANK">
              View here
            </a>
          )}
        </div>
        <ImgWrapper className="col-12 col-lg-6">
          {/* todo */}
          <img src={img} alt={title} className="img-fluid" />
        </ImgWrapper>
      </div>
    </Wrapper>
  )
}

export default Project
