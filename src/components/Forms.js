import s from 'styled-components'

import { BLUE } from '../constants/colors'

const styles = `
  margin-bottom: 1rem !important;
  border-radius: 0 !important;
  border-width: 2px !important;
  font-size: 1rem !important;
  padding: 0.75rem !important;

  &:active,
  &:focus {
    border-color: ${BLUE} !important;
  }
`

export const Input = s.input`
  ${styles}
`

export const Textarea = s.textarea`
  ${styles}
`
