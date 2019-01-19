import s from 'styled-components'

import { RED, BLUE } from '../constants/colors'

export default s.div`
  width: 4rem;
  height: 0.5rem;
  position: absolute;
  left: calc(50% - 2rem);
  transform: translateY(-0.25rem);
  z-index: 2;

  ${({ red }) => red && `background: ${RED};`}
  ${({ blue }) => blue && `background: ${BLUE};`}
`
