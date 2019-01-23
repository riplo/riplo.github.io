import s from 'styled-components'

import { minWidth, PHONE, TABLET } from '../constants/widths'

export const Container = s.div`
  padding: 0 1rem;
  width: 100%;
  display: block;

  ${minWidth(PHONE)} {
    padding: 0 calc(1rem + 2.5%);
  }

  ${minWidth(TABLET)} {
    padding: 0 calc(1rem + 5%);
  }
`
