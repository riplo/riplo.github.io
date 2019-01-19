import React from 'react'
import s from 'styled-components'

import { GRAY } from '../../constants/colors'
import prateek from '../../images/people/prateek.jpeg'
import cam from '../../images/people/cam.jpeg'
import adam from '../../images/people/adam.jpg'
import terry from '../../images/people/terry.png'
import brian from '../../images/people/brian.jpg'

const BORDER_WIDTH = '3px'

const Wrapper = s.div`
  position: absolute;
  width: 100%;
  display: block;
  margin-left: -${BORDER_WIDTH};
  overflow: hidden;
  text-align: center;
  transform: translateY(-2rem);

  div {
    height: 4rem;
    width: 4rem;
    margin-right: -1.25rem;
    display: inline-block;
    background: ${GRAY};
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: ${BORDER_WIDTH} solid white;

    &#prateek {
      background-image: url(${prateek});
    }

    &#cam {
      background-image: url(${cam});
    }

    &#adam {
      background-image: url(${adam});
    }

    &#terry {
      background-image: url(${terry});
    }

    &#brian {
      background-image: url(${brian});
    }
  }
`

export default () => (
  <Wrapper>
    <div id="prateek"></div>
    <div id="cam"></div>
    <div id="adam"></div>
    <div id="terry"></div>
    <div id="brian"></div>
  </Wrapper>
)
