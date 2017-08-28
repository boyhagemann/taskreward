import React from 'react'
import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'

const Badge = styled.span`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  border-radius: 50%;
  text-align: center;
  vertical-align: text-bottom;
  width: ${ props => props.size }px;
  height: ${ props => props.size }px;
  line-height: ${ props => props.size}px;
  ${space}
  ${fontSize}
  ${color}
`
  export default props => <Badge size={20} bg={`ocean`} color={`bleech`} fontSize={0} { ...props } />
