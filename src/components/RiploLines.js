import s from 'styled-components'

import { WHITE, TRANSPARENT_RED } from '../constants/colors'

export default s.div`
  background-image: linear-gradient(90deg, ${WHITE} 70%,transparent 70%),linear-gradient(${TRANSPARENT_RED} 15%, ${WHITE} 15%);
  background-size: 20px 20px;
  position: absolute;
  z-index: 0;

  ${({ right }) => right && `
    height: 10rem;
    right: 0;
    width: 40%;
    margin-top: 5rem;
  `}

  ${({ left }) => left && `
    height: 6rem;
    transform: translateY(-5.5rem);
    left: 0;
    width: 25%;
  `}
`
