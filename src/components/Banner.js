import s from 'styled-components'

import { WHITE } from '../constants/colors'
import { minWidth, TABLET } from '../constants/widths'

export default s.div`
  color: ${WHITE};
  padding: 5% 0rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  p {
    font-size: 1.5rem;
  }

  ${minWidth(TABLET)} {
    p {
      font-size: 1.25rem;
    }
  }
`
