import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

const borderColor = props => color({ ...props, color: props.bc }).color

export default styled.input`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  font-family: Verdana;
  box-sizing: border-box;
  border: 1px solid;
  border-color: ${borderColor};

  ::-webkit-input-placeholder {
    color: #ccc;
  }
  :focus {
    outline: none;
  }
`
