import s from 'styled-components'
import { SERIF } from '../constants/fonts'

export const Statement = s.h1`
  font-family: ${SERIF};
  text-align: center;
  font-weight: bold;
`

export const Title = s.h2`
  margin-bottom: 1.5rem;
  font-family: ${SERIF};
  font-weight: bold;

  ${({ center }) => center && `
    text-align: center;
  `}
`

export const Subtitle = s.h5`
  font-weight: bold;
`

export const Header = s.h2`
  font-weight: bold;
  margin-bottom: 1rem;
`

export const Text = s.p`
  ${({ center }) => center && `
    text-align: center;
  `}
`
