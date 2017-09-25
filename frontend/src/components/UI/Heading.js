import React from 'react'
import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'

const StyledHeading = styled.h1`
  font-weight: normal;
  font-family:  'Roboto';
  line-height: 1em;
  ${space}
  ${fontSize}
  ${color}
`

export default props => <StyledHeading fontSize={6} { ...props } />
