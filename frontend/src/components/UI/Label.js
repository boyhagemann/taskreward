import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color, } from 'styled-system'

const Label = styled.label`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  display: ${ props => props.inline ? 'inline-block' : 'block' };
  box-sizing: border-box;
  cursor: pointer;
`

export default props => <Label color={`night`} mb={1} fontSize={2} { ...props } />
