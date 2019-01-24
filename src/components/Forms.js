import s from 'styled-components'

import { BLUE, BLACK, WHITE } from '../constants/colors'
import { BtnInput } from './Btn'

const OUTLINE = `rgba(0, 123, 255, 0.25)`
const BORDER = `#ced4da`

const styles = `
  margin-bottom: 1rem !important;
  border-radius: 0 !important;
  border: 2px solid ${BORDER};
  background-color: ${WHITE};
  background-clip: padding-box;
  font-size: 1rem !important;
  padding: 0.75rem !important;
  display: block;
  width: 100%;
  line-height: 1.5;
  color: ${BLACK};
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:active,
  &:focus {
    border-color: ${BLUE} !important;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${OUTLINE};
  }
`

export const Input = s.input`
  ${styles}
`

export const Textarea = s.textarea`
  ${styles}
`

export const SubmitBtn = s(BtnInput)`
  ${({ disabled }) => disabled && `
    cursor: not-allowed;
    opacity: 0.625;
  `}
`
