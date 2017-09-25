import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import { randomColor } from '../../utils/colors'
const Rounded = styled(props => <Box bg={props.color || randomColor().hex() } { ...props } color={`bleech`} />)`
  border-radius: 100%;
  text-align: center;
  vertical-align: center;
  line-height: ${ props => props.size / 2 }px;
  width: ${ props => props.size }px;
  height: ${ props => props.size }px;
`

export default props => <Rounded p={1} { ...props } />
