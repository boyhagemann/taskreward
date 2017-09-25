import React from 'react'
import Box from './Box'

const Visual = Box.extend`
  position: relative;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  height: ${ props => props.height }px;
`

export default props => <Visual width={1} { ...props } />
