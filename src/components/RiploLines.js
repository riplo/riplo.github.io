import s from 'styled-components'

import { LIGHT_GRAY, TRANSPARENT_RED } from '../constants/colors'

export default s.div`
  background-image: linear-gradient(90deg, ${LIGHT_GRAY} 70%,transparent 70%),linear-gradient(${TRANSPARENT_RED} 15%, ${LIGHT_GRAY} 15%);
  background-size: 20px 20px;
  position: absolute;
  z-index: 0;

  ${({ right }) => right && `
    height: 10rem;
    right: 0;
    width: 40%;
  `}

  ${({ left }) => left && `
    height: 6rem;
    transform: translateY(-5.5rem);
    left: 0;
    width: 25%;
  `}
`
