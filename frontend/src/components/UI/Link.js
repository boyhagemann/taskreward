import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { space, width, fontSize, color } from 'styled-system'

const StyledLink = styled(Link)`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  text-decoration: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

export default props => <StyledLink color={`calm`} { ...props } />
