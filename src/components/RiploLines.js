import s from 'styled-components'

import { WHITE, TRANSPARENT_RED } from '../constants/colors'
import { minWidth, TABLET } from '../constants/widths'

export default s.div`
  ${minWidth(TABLET)} {
    background-image: linear-gradient(90deg, ${WHITE} 70%, transparent 70%),linear-gradient(${TRANSPARENT_RED} 15%, ${WHITE} 15%);
    background-size: 20px 20px;
    position: absolute;
    z-index: 0;

    ${({ right }) => right && `
      margin-top: calc(5% + 1rem);
      height: 10rem;
      right: 5%;
      width: 40%;
    `}

    ${({ left }) => left && `
      height: 6rem;
      left: 15%;
      width: 40%;
      transform: translateY(-5.5rem);
    `}
  }
`
