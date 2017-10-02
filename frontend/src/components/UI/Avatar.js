import React from 'react'
import styled from 'styled-components'
import { spacing, fontSize, color } from 'styled-system'
import Box from './Box'
import { randomColor } from '../../utils/colors'

const StyledAvatar = Box.extend`
  border-radius: 100%;
  text-align: center;
  vertical-align: center;
  line-height: ${ props => props.size / 2 }px;
  width: ${ props => props.size }px;
  height: ${ props => props.size }px;
`

export default props => {

  const size = fontSize({ fontSize: props.size}).fontSize
  const bg = color(props).color || randomColor().hex()

  return <StyledAvatar p={1} bg={bg} { ...props } size={size} color={`bleech`}  />
}
