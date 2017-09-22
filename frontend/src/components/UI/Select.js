import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

const borderColor = props => color({ ...props, color: props.borderColor }).color

const Select = styled.select`
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

export default props => <Select width={1} p={1} fontSize={2} color={`pencil++`} borderColor={`canvas--`} { ...props } />
