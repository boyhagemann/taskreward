import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

const StyledInput = styled.input`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  box-sizing: border-box;

  ::-webkit-input-placeholder {
    color: #ccc;
  }
  :focus {
    outline: none;
  }
`

export default props => <StyledInput { ...props } type="checkbox" />
